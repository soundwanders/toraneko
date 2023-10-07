import React from 'react';
// import SplineImage from './SplineImage';
import MiniRoom from './Spline';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-wrap md:h-screen bg-gray-200 dark:bg-gray-800">
      {/* 40% Text/Content Section */}
      <div className="w-full md:w-2/5 p-4 flex items-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-8xl font-bold mb-4 text-gray-800 dark:text-gray-100 whitespace-nowrap">
            Toraneko! <span className="text-5xl">🐯</span>
          </h1>
          <p className="text-lg text-gray-300 dark:text-gray-100 px-4">
            Tabby cats and tiger paws make the world go round.
          </p>
        </div>
      </div>
      {/* 60% Image Section */}
      <div className="w-full md:w-1/2 relative p-8 mt-4">
        <MiniRoom />
      {/* <SplineImage
        src="/mini-room.png"
        alt="An image"
        width={400}
        height={200}
        className="spline"
      /> */}
      </div>
    </div>
  )
};

export default Hero;
