"use client";

import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import SplineImage from './SplineImage';

const SplineImagePlaceholder: React.FC = () => (
  <div className="w-full md:w-1/2 h-auto relative p-8 -mt-6 md:mt-14 md:ml-36 slide-up-and-fade">
    <SplineImage
      src="/miniroom.png"
      alt="If you're reading this it's too late for ear scratches 😿"
      width={608}
      height={342}
      quality={90}
    />
  </div>
);

const SplineComponent: React.FC = () => (
  <div className={`w-3/4 md:w-7/12 relative md:mt-12 md:-translate-x-12 mx-auto hide-on-mobile`}>
    <Spline
      className="spline"
      scene="https://prod.spline.design/5M5aIcBumjTLmljz/scene.splinecode"
    />
  </div>
);

const MiniRoom: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <SplineImagePlaceholder />
    </Suspense>
  )

  // commented out until we can figure out how to speed up our spline scene loading

  // return (
  //   <>
  //     {isMobile ? (
  //       <SplineImagePlaceholder />
  //     ) : (
  //       <Suspense fallback={null}>
  //         <SplineComponent />
  //       </Suspense>
  //     )}
  //   </>
  // );
};

export default MiniRoom;
