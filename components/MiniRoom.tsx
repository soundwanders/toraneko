"use client";

import React, { useCallback, useEffect, useRef } from 'react';
import RoomImage from './RoomImage';

// How far the room is allowed to tilt, in degrees.
//
// This replaces the old Spline scene, which was parked because it cost ~790 kB
// (546 kB gzipped runtime + a 241 kB .splinecode) on a page that otherwise weighs
// ~149 kB, and because its orbit could swing far enough to expose the flat,
// unmodelled back walls. Clamping to a small angle here means that second problem
// cannot happen at all: there is no camera, just a bounded transform.
const MAX_TILT_DEG = 9;

const MiniRoom: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { reducedMotionRef.current = mq.matches; };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const apply = useCallback((rotX: number, rotY: number) => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = frameRef.current;
      if (el) el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      // Coarse pointers (touch) have no meaningful hover position, and the tilt would
      // just fight with scrolling.
      if (e.pointerType !== 'mouse' || reducedMotionRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      // Normalise cursor position within the box to -1..1 on both axes.
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      apply(-ny * MAX_TILT_DEG, nx * MAX_TILT_DEG);
    },
    [apply]
  );

  const handlePointerLeave = useCallback(() => apply(0, 0), [apply]);

  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="w-full md:w-1/2 h-auto relative p-8 -mt-6 md:mt-14 md:ml-36 slide-up-and-fade [perspective:1200px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        ref={frameRef}
        className="miniroom-tilt will-change-transform [transform-style:preserve-3d] transition-transform duration-300 ease-out motion-reduce:transition-none"
      >
        <RoomImage
          src="/miniroom.png"
          alt="If you're reading this it's too late for ear scratches 😿"
          width={608}
          height={342}
          quality={90}
          priority
        />
      </div>
    </div>
  );
};

export default MiniRoom;
