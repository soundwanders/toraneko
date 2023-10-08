import React, { Suspense, useState, useEffect, startTransition } from 'react';
import Spline from '@splinetool/react-spline';
import SplineImage from './SplineImage';

const SplineImagePlaceholder: React.FC = () => (
  <div className="w-full md:w-1/2 relative p-8 mt-4 md:translate-x-1/4">
    <SplineImage
      src="/miniroom.png"
      alt="If you're reading this it's too late 😿"
      width={608}
      height={342}
    />
  </div>
);

const SplineComponent: React.FC<{ handleSplineLoaded: () => void }> = ({
  handleSplineLoaded,
}) => (
  <div className="w-3/4 md:w-7/12 relative md:mt-12 md:-translate-x-16 mx-auto">
    {/* <Spline
      className="spline"
      onLoad={handleSplineLoaded}
      scene="https://prod.spline.design/akcFqsZFMTcrVJTi/scene.splinecode"
    />  */}

    <Spline 
      className="spline"
      onLoad={handleSplineLoaded}
      scene="https://prod.spline.design/atF7uaWZxoZX0Txx/scene.splinecode"
    />
  </div>
);

const MiniRoom: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Handle Spline scene loaded event
  const handleSplineLoaded = () => {
    startTransition(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Instead of setting `loading` directly, use `startTransition`
      startTransition(() => {
        setLoading(false);
      });
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <SplineImagePlaceholder />
      ) : (
        <SplineComponent handleSplineLoaded={handleSplineLoaded} />
      )}
    </>
  );
};

export default MiniRoom;
