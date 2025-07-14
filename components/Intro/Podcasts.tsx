"use client";

import React from 'react';
import { useTheme } from 'next-themes';

const Podcasts = () => {
  const { theme } = useTheme();

  const podcasts = [
    {
      name: 'The History of Rome',
      spotifyURL: 'https://open.spotify.com/show/6wiEd40oPbQ9UK1rSpIy8I',
      color: theme === 'light' ? 'text-red-600 hover:text-red-700' : 'text-red-300 hover:text-red-200',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/10',
      emoji: '🏛️'
    },
    {
      name: 'Fall of Civilizations',
      spotifyURL: 'https://open.spotify.com/show/44DE64rRpX1cFIQUlqQtvi',
      color: theme === 'light' ? 'text-blue-600 hover:text-blue-700' : 'text-blue-300 hover:text-blue-200',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/10',
      emoji: '🏺'
    },
    {
      name: 'Syntax',
      spotifyURL: 'https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby',
      color: theme === 'light' ? 'text-emerald-600 hover:text-emerald-700' : 'text-green-300 hover:text-green-200',
      bgColor: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/10',
      emoji: '💻'
    }
  ];

  return (
    <div className="px-1 md:px-2">
      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 px-2">
        <span className="pr-1">🎙️</span> I've been listening to...
      </p>
      
      {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:items-center">
        {podcasts.map((podcast, index) => (
          <div 
            key={index} 
            className={`group flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 ${podcast.bgColor} md:flex-1 md:justify-center`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-200">
              {podcast.emoji}
            </span>
            <a
              href={podcast.spotifyURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${podcast.color} transition-colors duration-200 hover:underline decoration-2 underline-offset-2 md:text-center`}
            >
              {podcast.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;