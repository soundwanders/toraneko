"use client";

import React from 'react';
import MiniRoom from './Spline';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiGithub, FiCoffee } from 'react-icons/fi';

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
    <div className="hero-container flex flex-wrap h-screen" style={containerStyle}>
      {/* Text/Content Section */}
      <div className="w-full md:w-2/5 px-8 md:p-4 flex items-center">
        <div className="max-w-lg mx-auto md:-translate-y-36">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 whitespace-nowrap">
            <span className="text-violet-400">
              sound
            </span>
            <span className="text-splinePink-300">
              wanders
            </span>
          </h1>
          <p className="text-sm md:text-lg text-slate-800 dark:text-gray-100 md:px-1">
            #1 Fan of Chubby Tabby Cats and Fuzzy Tiger Paws
            <span className="text-xl px-2">🐯</span>
          </p>

          <nav className="flex space-x-6 items-center font-bold text-lg text-slate-800 dark:text-gray-300 mt-4 md:px-1"> 
            <Link 
              href="https://github.com/soundwanders" 
              target="_blank" 
              className="mr-4"
            >
              <span className="github-logo inline-block mr-2">
                <FiGithub size={24} />
              </span>
              Github
            </Link>

            <Link 
              href="https://yamabiko.vercel.app" 
              target="_blank" 
              className=""
            >
              <span className="blog-logo inline-block mr-2 -mb-1">
                <FiCoffee size={24} />
              </span>
              Blog
            </Link>
          </nav>
        </div>
      </div>

      {/* MiniRoom Scene Section */}
      <MiniRoom />
    </div>
  );
};

export default Hero;
