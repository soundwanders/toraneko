"use client";

import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const CurrentlyReading = () => {
  const [bookTitle, setBookTitle] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get URL from our Goodreads Route Handler
    const rssFeedURL = '/api/goodreads'; 

    fetch(rssFeedURL)
      .then((response) => response.text())
      .then((xml) => {
        const parser = new Parser();
        parser.parseString(xml, (err, feed) => {
          if (err) {
            console.error('Error parsing RSS feed:', err);
            setError('Error parsing RSS feed.');
            return;
          }
          if (feed && feed.items.length > 0) {
            const firstItem = feed.items[0];
            const title = firstItem.title ?? null;
            setBookTitle(title);
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching RSS feed:', error);
        setError('Error fetching RSS feed.');
      });
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        bookTitle ? (
          <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 md:px-1 mt-4 px-1">
            I am currently reading {bookTitle}
          </p>
        ) : (
          <p className="px-1">
            Check back later to see what book I'm currently into!
          </p>
        )
      )}
    </div>
  );
};

export default CurrentlyReading;
