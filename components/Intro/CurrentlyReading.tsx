"use client";

import React, { useState, useEffect } from 'react';

const CurrentlyReading = () => {
  const [bookTitle, setBookTitle] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from your API route on the server-side
    fetch('/api/goodreads') // This route should return the RSS feed XML
      .then((response) => response.text())
      .then((xml) => {
        // Handle parsing of the received XML data
        try {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xml, 'text/xml');
          const items = xmlDoc.getElementsByTagName('item');
          if (items.length > 0) {
            const firstItem = items[0];
            const title = firstItem.querySelector('title')?.textContent ?? null;
            setBookTitle(title);
          } else {
            setError('No items found in the RSS feed.');
          }
        } catch (err) {
          console.error('Error parsing RSS feed:', err);
          setError('Error parsing RSS feed.');
        }
      })
      .catch((error) => {
        console.error('Error fetching RSS feed:', error);
        setError('Error fetching RSS feed.');
      });
  }, []);

  // Define the dynamic URL of the Goodreads page for the book
  const goodreadsBaseURL = 'https://www.goodreads.com/search?q=';
  const formattedBookTitle = bookTitle ? bookTitle.replace(/\s+/g, '+') : '';

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        bookTitle ? (
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 md:px-2 mt-4 mb-5 px-1">
            <span className="pr-1">🧐</span> Currently reading &nbsp;
            <a 
              className="text-indigo-700 dark:text-yellow-200 italic hover:underline" 
              href={`${goodreadsBaseURL}${formattedBookTitle}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {bookTitle}
            </a>
          </p>
        ) : (
          <p className="px-1">
            🕵️
          </p>
        )
      )}
    </div>
  );
};

export default CurrentlyReading;
