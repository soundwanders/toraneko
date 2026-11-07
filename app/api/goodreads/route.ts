// Goodreads retired its public RSS shelves (list_rss now 404s for every user), and the
// shelf list pages redirect anonymous visitors to sign-in. The public profile page still
// renders a "Currently Reading" box, so we read the book from there instead.
//
// This route is revalidated hourly, which means one upstream request per hour for the
// whole site regardless of traffic, and the CDN keeps serving the cached body (plus a day
// of stale-while-revalidate) in between.
// Next only accepts a literal here — it reads this statically, so it cannot be a
// reference to another const.
export const revalidate = 3600;

// If Goodreads hangs, fail fast rather than holding a serverless function open.
const UPSTREAM_TIMEOUT_MS = 5000;

const GOODREADS_ORIGIN = 'https://www.goodreads.com';
const PROFILE_URL = `${GOODREADS_ORIGIN}/user/show/160520358-j-coletta`;

export type CurrentlyReadingResponse = {
  book: { title: string; author: string | null; url: string } | null;
};

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === '#') {
      const n = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });
}

// Pulls the first book out of the profile's currently-reading box. Scoped to that box so
// a "Recent updates" or "Read" entry elsewhere on the page can never be mistaken for it.
function parseCurrentlyReading(html: string): CurrentlyReadingResponse['book'] {
  const start = html.indexOf('id="currentlyReadingReviews"');
  if (start === -1) return null;
  // The box is closed by the next "bigBox"; cap the slice in case the markup shifts.
  const nextBox = html.indexOf('class=" clearFloats bigBox"', start);
  const section = html.slice(start, nextBox === -1 ? start + 20000 : nextBox);

  const titleMatch = section.match(/<a class="bookTitle" href="([^"]+)">([\s\S]*?)<\/a>/);
  if (!titleMatch) return null;
  const authorMatch = section.match(/<a class="authorName"[^>]*>([\s\S]*?)<\/a>/);

  const [, href, rawTitle] = titleMatch;
  return {
    title: decodeEntities(rawTitle.trim()),
    author: authorMatch ? decodeEntities(authorMatch[1].trim()) : null,
    url: new URL(decodeEntities(href), GOODREADS_ORIGIN).toString(),
  };
}

export async function GET(): Promise<Response> {
  try {
    const response = await fetch(PROFILE_URL, {
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      next: { revalidate },
    });

    if (!response.ok) {
      console.error(`Error fetching Goodreads profile: Status ${response.status}`);
      return Response.json({ error: 'Upstream error' }, { status: 502 });
    }

    const book = parseCurrentlyReading(await response.text());
    const body: CurrentlyReadingResponse = { book };

    return Response.json(body, {
      headers: {
        'Cache-Control': `public, s-maxage=${revalidate}, stale-while-revalidate=86400`,
      },
    });
  } catch (error) {
    // AbortSignal.timeout rejects with a TimeoutError DOMException.
    if (error instanceof DOMException && error.name === 'TimeoutError') {
      console.error(`Goodreads profile timed out after ${UPSTREAM_TIMEOUT_MS}ms`);
      return Response.json({ error: 'Gateway Timeout' }, { status: 504 });
    }
    console.error('Error fetching Goodreads profile:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
