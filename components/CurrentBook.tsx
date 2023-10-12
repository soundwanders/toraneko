// ./components/CurrentlyReading.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const CurrentlyReading = () => {
  const [bookTitle, setBookTitle] = useState<string | null>(null);
  const [goodreadsLink, setGoodreadsLink] = useState<string | null>(null);

  useEffect(() => {
    // Use relative path to the goodreads api route we have created
    const rssFeedURL = '/api/goodreads';

    const parser = new Parser();

    parser.parseURL(rssFeedURL, (err, feed) => {
      if (!err && feed.items.length > 0) {
        // Get the first item (currently reading book)
        const item = feed.items[0];
       
        // Extract the book title and Goodreads link
        const bookTitleMatch = /<title>(.*?)<\/title>/i.exec(item.content ?? '');
        const goodreadsLinkMatch = /<link>(.*?)<\/link>/i.exec(item.content ?? '');

        if (bookTitleMatch && goodreadsLinkMatch) {
          const extractedBookTitle = bookTitleMatch[1];
          const extractedGoodreadsLink = goodreadsLinkMatch[1];

          setBookTitle(extractedBookTitle);
          setGoodreadsLink(extractedGoodreadsLink);
        }
      }
    });
  }, []);

  return (
    <>
      {bookTitle && goodreadsLink && (
        <p>
          I'm currently reading{' '}
          <a href={goodreadsLink} target="_blank" rel="noopener noreferrer">
            {bookTitle}
          </a>
          .
        </p>
      )}
    </>
  );
};

export default CurrentlyReading;
