"use client";

import React from 'react';
import MiniRoom from './Spline';

const Hero = () => {
  return (
    <div className="flex flex-wrap md:h-screen">
      {/* 40% Text/Content Section */}
      <div className="w-full md:w-2/5 p-4 dark:bg-gray-800 flex items-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Welcome to My Website
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus luctus tincidunt justo.
          </p>
        </div>
      </div>
      {/* 60% Image Section */}
      <div className="w-full md:w-3/5 relative p-20">
        <MiniRoom />
      </div>
    </div>
  );
};

export default Hero;
