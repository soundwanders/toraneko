"use client";

import React from 'react';
import MiniRoom from '../Spline';
import HeroLinks from '../nav/HeroLinks';
import Title from '../Intro/Title';
import Subtitle from '../Intro/Subtitle';
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
    <div className="hero-container flex flex-wrap h-screen" style={containerStyle}>
      {/* Text/Content Section */}
      <div className="w-full md:w-2/5 px-8 md:p-4 flex items-center slide-up-and-fade">
        <div className="max-w-xl mx-auto md:-translate-y-36">
          <Title />
          <Subtitle />
          <HeroLinks />
        </div>
      </div>

      {/* MiniRoom Scene Section */}
      <MiniRoom />
    </div>
  );
};

export default Hero;
