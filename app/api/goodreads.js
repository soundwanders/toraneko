// api/goodreads.js

export default async function handler(req, res) {
  try {
    const rssFeedURL =
      'https://www.goodreads.com/review/list_rss/160520358?shelf=currently-reading';
    const response = await fetch(rssFeedURL);

    if (!response.ok) {
      console.error(
        `Error fetching Goodreads RSS feed: Status ${response.status}`
      );
      res.status(500).send('Internal Server Error');
      return;
    }

    const xml = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  } catch (error) {
    console.error('Error fetching Goodreads RSS feed:', error);
    res.status(500).send('Internal Server Error');
  }
}
