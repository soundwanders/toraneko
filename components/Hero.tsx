"use client";

import React from 'react';
import MiniRoom from './Spline';
import { useTheme } from 'next-themes';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const backgroundImage = theme === 'light' ? '/lightBg.svg' : '/darkBg.svg';

  // Create an inline style object for backgroundImage property
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="hero-container flex flex-wrap h-full md:h-screen" style={containerStyle}>
      {/* Text/Content Section */}
      <div className="w-full md:w-2/5 p-4 flex items-center">
        <div className="max-w-lg mx-auto md:-translate-y-36">
          <h1 className="text-2xl md:text-8xl font-bold mb-4 text-gray-900 dark:text-gray-200 whitespace-nowrap">
            <span className="text-violet-400">
              sound
            </span>
            <span className="text-salmon-400">
              wanders
            </span>
          </h1>
          <p className="text-md md:text-lg dark:text-gray-100 md:px-2">
            <span className="text-slate-300 dark:text-gray-100">
              Tabby cats and tiger paws make the world go round
            </span>
            <span className="text-3xl px-2">🐯</span>
          </p>
        </div>
      </div>

      {/* MiniRoom Scene Section */}
      <MiniRoom />
    </div>
  );
};

export default Hero;
