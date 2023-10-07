"use client";

import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineWrapper = ({ sceneUrl }) => {
  const splineContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      scene: sceneUrl,
    };

    // Use `splineContainerRef.current` to access the DOM element
    const splineInstance = new Spline(options);
    
    // Make sure to wait for the component to be rendered before mounting
    const mountSpline = () => {
      splineInstance.mount(splineContainerRef.current);
    };
    
    // Call `mountSpline` after the initial render
    requestAnimationFrame(mountSpline);

    return () => {
      splineInstance.unmount();
    };
  }, [sceneUrl]);

  return <div ref={splineContainerRef} />;
};

export default SplineWrapper;
