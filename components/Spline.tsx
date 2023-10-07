import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import SplineImage from './SplineImage';

const MiniRoom: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Handle Spline scene loaded event
  const handleSplineLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Add a manual timeout after 2 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full md:w-1/2 relative p-8 mt-4 md:translate-x-1/4">
          <SplineImage
            src="/mini-room.png"
            alt="If you're reading this it's too late 😿"
            width={630}
            height={473}
          />
        </div>
      )}

      <div className="flex items-center w-full md:w-1/2 relative md:translate-y-28 md:translate-x-[20%]">
        <Spline
          className="spline"
          onLoad={handleSplineLoaded}
          scene="https://prod.spline.design/akcFqsZFMTcrVJTi/scene.splinecode"
          style={{
            width: '80%',
            height: '100%',
            minHeight: '400px'
          }}
        />
      </div>
    </>
  );
};

export default MiniRoom;
