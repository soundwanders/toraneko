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
const MAX_TILT_DEG = 7;

// Fraction of the remaining distance closed each frame. The first version used a CSS
// `transition-transform`, which restarted on every single pointermove and so never
// finished — that is what made it feel janky and abrupt. Easing toward a target in a
// rAF loop instead means the room trails the cursor smoothly and always settles.
const EASING = 0.09;

const MiniRoom: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<() => void>(() => {});
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { reducedMotionRef.current = mq.matches; };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // The rAF loop lives inside one effect so `step` can recurse without being a
  // useCallback that references itself (a stale-closure footgun, and what
  // react-hooks/immutability flags). Everything it touches is a ref, so it never
  // needs rebuilding.
  useEffect(() => {
    const step = () => {
      const t = target.current;
      const c = current.current;
      c.x += (t.x - c.x) * EASING;
      c.y += (t.y - c.y) * EASING;

      const settled = Math.abs(t.x - c.x) < 0.02 && Math.abs(t.y - c.y) < 0.02;
      if (settled) {
        c.x = t.x;
        c.y = t.y;
      }

      const el = frameRef.current;
      if (el) el.style.transform = `rotateX(${c.x.toFixed(3)}deg) rotateY(${c.y.toFixed(3)}deg)`;

      // Idle once we've arrived; the next pointermove restarts the loop.
      rafRef.current = settled ? null : requestAnimationFrame(step);
    };

    startRef.current = () => {
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(step);
    };

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Coarse pointers (touch) have no meaningful hover position, and the tilt would
    // just fight with scrolling.
    if (e.pointerType !== 'mouse' || reducedMotionRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // Normalise cursor position within the box to -1..1 on both axes.
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    target.current = { x: -ny * MAX_TILT_DEG, y: nx * MAX_TILT_DEG };
    startRef.current();
  }, []);

  const handlePointerLeave = useCallback(() => {
    target.current = { x: 0, y: 0 };
    startRef.current();
  }, []);

  return (
    <div
      className="w-full md:w-1/2 h-auto relative p-8 -mt-6 md:mt-14 md:ml-36 slide-up-and-fade [perspective:1200px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        ref={frameRef}
        className="miniroom-tilt will-change-transform [transform-style:preserve-3d]"
      >
        <RoomImage
          src="/miniroom.png"
          alt="If you're reading this it's too late for ear scratches 😿"
          width={608}
          height={342}
          quality={90}
          priority
          // The room is decoration, not an asset to be dragged out of the page into a
          // new tab or another app. Kill the native drag-image and the iOS long-press
          // save sheet, while leaving pointer events (and so the tilt) intact.
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
        />
      </div>
    </div>
  );
};

export default MiniRoom;
