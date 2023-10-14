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
      if (err) {
        console.error('Error parsing RSS feed:', err);
      } else {
        console.log('Feed items:', feed.items);

        if (feed.items.length > 0) {
          // Get the first item (currently reading book)
          const item = feed.items[0];

          // Extract the book title and Goodreads link
          const bookTitleMatch = /<title>(.*?)<\/title>/i.exec(item.content ?? '');
          const goodreadsLinkMatch = /<link>(.*?)<\/link>/i.exec(item.content ?? '');

          if (bookTitleMatch && goodreadsLinkMatch) {
            const extractedBookTitle = bookTitleMatch[1];
            const extractedGoodreadsLink = goodreadsLinkMatch[1];

            console.log('Extracted Book Title:', extractedBookTitle);
            console.log('Extracted Goodreads Link:', extractedGoodreadsLink);

            setBookTitle(extractedBookTitle);
            setGoodreadsLink(extractedGoodreadsLink);
          } else {
            console.error('Failed to extract book title or Goodreads link.');
          }
        } else {
          console.warn('No items found in the feed.');
        }
      }
    });
  }, []);

  return (
    <>
      {bookTitle && goodreadsLink ? (
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 md:px-1 mt-4 px-1">
          I'm currently reading{' '}
          <a href={goodreadsLink} target="_blank" rel="noopener noreferrer">
            {bookTitle}
          </a>
          .
        </p>
      ) : (
        <p className="px-1">x_x</p>
      )}
    </>
  );
};

export default CurrentlyReading;
