"use client";

import React, { useState, useEffect } from 'react';

const CurrentlyReading = () => {
  const [bookTitle, setBookTitle] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from goodreads API route
    fetch('/api/goodreads')
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Define the dynamic URL of the Goodreads page for the book
  const goodreadsBaseURL = 'https://www.goodreads.com/search?q=';
  const formattedBookTitle = bookTitle ? bookTitle.replace(/\s+/g, '+') : '';

  if (isLoading) {
    return (
      <div className="px-1 md:px-2">
        <div className="flex items-center space-x-2">
          <span className="animate-pulse">📚</span>
          <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Loading current read...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="px-1 md:px-2 w-fit">
      {error ? (
        <div className="flex items-center space-x-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30">
          <span>😅</span>
          <span className="text-sm text-red-600 dark:text-red-400">
            Currently between books (or the feed is shy)
          </span>
        </div>
      ) : (
        bookTitle ? (
          <div className="group p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 border border-indigo-200/50 dark:border-indigo-700/30 hover:shadow-md transition-all duration-200">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              <span className="pr-2">📖</span> Currently reading &nbsp;
              <a 
                className="text-indigo-700 dark:text-indigo-300 italic hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors duration-200 hover:underline decoration-2 underline-offset-2" 
                href={`${goodreadsBaseURL}${formattedBookTitle}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {bookTitle}
              </a>
            </p>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span>🕵️</span>
            <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
              Reading list loading...
            </span>
          </div>
        )
      )}
    </div>
  );
};

export default CurrentlyReading;