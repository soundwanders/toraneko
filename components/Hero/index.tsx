"use client";

import React from 'react';
import MiniRoom from '../Spline';
import HeroLinks from '../nav/HeroLinks';
import Title from '../Intro/Title';
import Subtitle from '../Intro/Subtitle';
import CurrentlyReading from "../Intro/CurrentlyReading";
import Podcasts from "../Intro/Podcasts";

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
    <div className="hero-container flex flex-wrap min-h-screen relative overflow-hidden" style={containerStyle}>
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-salmon-500/5 dark:bg-splinePink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Text/Content Section */}
      <div className="w-full md:w-2/5 px-8 md:px-28 md:py-4 flex items-center slide-up-and-fade relative z-10">
        <div className="max-w-xl mx-auto md:-translate-y-36">
          <Title />
          <Subtitle />
          <HeroLinks />
          
          {/* Content sections */}
          <div className="space-y-6 mt-8">
            <CurrentlyReading />
            <Podcasts />
          </div>
        </div>
      </div>

      {/* MiniRoom Scene Section */}
      <MiniRoom />
    </div>
  );
};

export default Hero;