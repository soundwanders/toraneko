export async function GET(request: Request): Promise<Response> {
  try {
    const rssFeedURL = "https://www.goodreads.com/review/list_rss/160520358?shelf=currently-reading";

    const response = await fetch(rssFeedURL);

    if (!response.ok) {
      console.error(`Error fetching Goodreads RSS feed: Status ${response.status}`);
      return new Response('Internal Server Error', { status: 500 });
    }
    const xml = await response.text();

    return new Response(xml, {
      status: 200,
      headers: { 'Content-Type': 'application/xml' },
    });
  } catch (error) {
    console.error('Error fetching Goodreads RSS feed:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
