"use client";

import React from 'react';
import { useTheme } from 'next-themes';

const Podcasts = () => {
  const { theme } = useTheme();

  const podcasts = [
    {
      name: 'The History of Rome',
      spotifyURL: 'https://open.spotify.com/show/5bkGzRnrMJ2HxHWaU2j7ND',
      color: theme === 'light' ? 'text-red-600' : 'text-red-300',
    },
    {
      name: 'Fall of Civilizations',
      spotifyURL: 'https://open.spotify.com/show/3FpX92jKp3Bb2Wfa2cgO0U',
      color: theme === 'light' ? 'text-blue-600' : 'text-blue-300',
    },
    {
      name: 'Casefiles Presents',
      spotifyURL: 'https://open.spotify.com/show/4jR3GsT1pAwJnZp6mFSDNc',
      color: theme === 'light' ? 'text-emerald-600' : 'text-green-300',
    }
  ];

  return (
    <>
      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 px-1 md:px-2 mt-2 mb-2">
        <span className="pr-1">🎙️</span> Some of my favorite podcasts...
      </p>
      <ul className="list-disc pl-5 md:pl-6">
        {podcasts.map((podcast, index) => (
          <li key={index} className={`text-sm ${podcast.color} mt-1`}>
            <a
              href={podcast.spotifyURL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {podcast.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Podcasts;
