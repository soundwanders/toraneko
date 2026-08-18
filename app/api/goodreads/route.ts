// Goodreads publishes no rate limit for these RSS shelves, so the polite thing is to
// not hit them once per visitor. This route is revalidated hourly, which means one
// upstream request per hour for the whole site regardless of traffic, and the CDN
// keeps serving the cached body (plus a day of stale-while-revalidate) in between.
// Next only accepts a literal here — it reads this statically, so it cannot be a
// reference to another const.
export const revalidate = 3600;

// If Goodreads hangs, fail fast rather than holding a serverless function open.
const UPSTREAM_TIMEOUT_MS = 5000;

const RSS_FEED_URL =
  'https://www.goodreads.com/review/list_rss/160520358?shelf=currently-reading';

export async function GET(): Promise<Response> {
  try {
    const response = await fetch(RSS_FEED_URL, {
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      next: { revalidate },
    });

    if (!response.ok) {
      console.error(`Error fetching Goodreads RSS feed: Status ${response.status}`);
      return new Response('Internal Server Error', { status: 500 });
    }
    const xml = await response.text();

    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': `public, s-maxage=${revalidate}, stale-while-revalidate=86400`,
      },
    });
  } catch (error) {
    // AbortSignal.timeout rejects with a TimeoutError DOMException.
    if (error instanceof DOMException && error.name === 'TimeoutError') {
      console.error(`Goodreads RSS feed timed out after ${UPSTREAM_TIMEOUT_MS}ms`);
      return new Response('Gateway Timeout', { status: 504 });
    }
    console.error('Error fetching Goodreads RSS feed:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
