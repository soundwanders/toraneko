import React, { Suspense, useState, useEffect, startTransition } from 'react';
import Spline from '@splinetool/react-spline';
import SplineImage from './SplineImage';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

const SplineImagePlaceholder: React.FC = () => (
  <div className="w-full md:w-1/2 relative p-8 -mt-4 md:mt-16 md:translate-x-1/4">
    <SplineImage
      src="/miniroom.png"
      alt="If you're reading this it's too late for ear scratches 😿"
      width={608}
      height={342}
    />
  </div>
);

const SplineComponent: React.FC<{ handleSplineLoaded: () => void }> = ({
  handleSplineLoaded,
}) => (
  <div className={`w-3/4 md:w-7/12 relative md:mt-12 md:-translate-x-16 mx-auto hide-on-mobile`}>
    <Spline
      className="spline"
      onLoad={handleSplineLoaded}
      scene="https://prod.spline.design/atF7uaWZxoZX0Txx/scene.splinecode"
    />
  </div>
);

const MiniRoom: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  // Handle Spline scene loaded event
  const handleSplineLoaded = () => {
    startTransition(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isMobile ? (
        <SplineImagePlaceholder />
      ) : (
        <Suspense fallback={null}>
          {loading ? (
            <SplineImagePlaceholder />
          ) : (
            <SplineComponent handleSplineLoaded={handleSplineLoaded} />
          )}
        </Suspense>
      )}
    </>
  );
};

export default MiniRoom;
