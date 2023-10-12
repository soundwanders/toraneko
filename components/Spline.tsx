"use client";

import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import SplineImage from './SplineImage';
import { useIsMobile } from '@/hooks/useIsMobile';

const SplineImagePlaceholder: React.FC = () => (
  <div className="w-full md:w-1/2 h-auto relative p-8 -mt-4 md:mt-16 md:translate-x-1/4">
    <SplineImage
      src="/miniroom.png"
      alt="If you're reading this it's too late for ear scratches 😿"
      width={608}
      height={342}
    />
  </div>
);

const SplineComponent: React.FC = () => (
  <div className={`w-3/4 md:w-7/12 relative md:mt-12 md:-translate-x-16 mx-auto hide-on-mobile`}>
    <Spline
      className="spline"
      scene="https://prod.spline.design/5M5aIcBumjTLmljz/scene.splinecode"
    />
  </div>
);

const MiniRoom: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <SplineImagePlaceholder />
      ) : (
        <Suspense fallback={<SplineImagePlaceholder/>}>
          <SplineComponent />
        </Suspense>
      )}
    </>
  );
};

export default MiniRoom;
