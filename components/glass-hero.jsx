'use client'; 
import Link from 'next/link';

import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;

export default function GlassHero() {
  const containerRef = useRef(null);

  // References for coordinates, animation physics, and touch state
  const rawPos = useRef({ x: -999, y: -999 });
  const smoothPos = useRef({ x: -999, y: -999 });
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isTrackingTouch = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateMaskProperties = () => {
      // Check for prefers-reduced-motion
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const posFactor = prefersReducedMotion ? 1 : 0.14;
      const radiusFactor = prefersReducedMotion ? 1 : 0.12;

      // Position interpolation
      smoothPos.current.x += (rawPos.current.x - smoothPos.current.x) * posFactor;
      smoothPos.current.y += (rawPos.current.y - smoothPos.current.y) * posFactor;

      // Radius interpolation
      currentRadius.current +=
        (targetRadius.current - currentRadius.current) * radiusFactor;

      // Snap to zero when contracting
      if (targetRadius.current === 0 && currentRadius.current < 0.05) {
        currentRadius.current = 0;
      }

      // Directly update CSS custom properties without triggering React re-renders
      container.style.setProperty('--reveal-x', `${smoothPos.current.x.toFixed(2)}px`);
      container.style.setProperty('--reveal-y', `${smoothPos.current.y.toFixed(2)}px`);
      container.style.setProperty(
        '--reveal-radius',
        `${currentRadius.current.toFixed(2)}px`
      );

      rafId.current = requestAnimationFrame(updateMaskProperties);
    };

    rafId.current = requestAnimationFrame(updateMaskProperties);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Desktop Pointer Handlers
  const handlePointerEnter = (e) => {
    if (e.pointerType === 'mouse') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      rawPos.current = { x, y };
      // If pointer was far off-screen, initialize smooth coordinates immediately to prevent trailing jump
      if (smoothPos.current.x < -500) {
        smoothPos.current = { x, y };
      }
      targetRadius.current = DESKTOP_RADIUS;
    }
  };

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (e.pointerType === 'mouse') {
      rawPos.current = { x, y };
      targetRadius.current = DESKTOP_RADIUS;
    } else if (isTrackingTouch.current) {
      // Touch/pen tracking while held
      rawPos.current = { x, y };
    }
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType === 'mouse') {
      targetRadius.current = 0;
    }
  };

  // Touch / Mobile Handlers
  const handlePointerDown = (e) => {
    if (e.pointerType !== 'mouse') {
      isTrackingTouch.current = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Fallback for browsers without pointer capture
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      rawPos.current = { x, y };
      smoothPos.current = { x, y }; // Immediately snap to touch point
      targetRadius.current = MOBILE_RADIUS;
    }
  };

  const handlePointerUp = (e) => {
    if (e.pointerType !== 'mouse') {
      isTrackingTouch.current = false;
      targetRadius.current = 0;
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Ignore if pointer capture already released
      }
    }
  };

  const handlePointerCancel = (e) => {
    if (e.pointerType !== 'mouse') {
      isTrackingTouch.current = false;
      targetRadius.current = 0;
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label="Portfolio Hero"
      className="relative w-full h-[100dvh] min-h-[42rem] overflow-hidden isolate touch-none min-w-[320px] select-none bg-paper"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      {/* LAYER 1: Base Editorial Portrait */}
      <div
        className="hero-portrait-base anim-portrait-in"
        aria-hidden="true"
      />

      {/* LAYER 2: Liquid-Glass Anatomical Reveal */}
      <div
        className="hero-portrait-reveal"
        aria-hidden="true"
      />

      {/* LAYER 3: Technical Grid + Background Geometry */}
      <div className="technical-grid" aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="technical-grid-cell" />
        ))}
      </div>

      <div className="hero-bg-circle" aria-hidden="true" />

      {/* LAYER 5: Navigation (rendered semantically above copy for keyboard accessibility) */}
    
      <Navbar/>

      {/* LAYER 4: Headline & Editorial Copy */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between">
        

        <div
          className="absolute"
          style={{
            top: 'calc(clamp(15%, 28vw, 34%))',
            left: 'max(5.6vw, 2rem)',
            right: 'max(5.6vw, 2rem)',
          }}
        >
          <h1
            className="font-sans font-medium text-ink tracking-[-0.085em] leading-[0.87] md:leading-[0.93] text-[clamp(2.7rem,12.5vw,3.8rem)] md:text-[clamp(5.4rem,6.2vw,6.8rem)] w-[68%] sm:w-[62%] md:w-auto break-words"
          >
            <span className="block overflow-hidden py-0.5">
              <span className="block anim-headline-1">Building</span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="block anim-headline-2">Beyond</span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="block anim-headline-3">Possible.</span>
            </span>
          </h1>
        </div>

        {/* Right-Side Tagline */}
        <aside
          aria-label="Editorial Note"
          className="absolute top-[55%] md:top-auto md:bottom-[max(5.6vw,2.5rem)] right-5 md:right-[max(5.6vw,2rem)] text-right font-mono text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-ink-muted leading-[1.65] anim-tagline-in"
        >
          <span className="block text-ink-subtle">BUILDING THE</span>
          <span className="block text-ink font-medium">NEXT VERSION</span>
          <span className="block text-ink-subtle">IN PUBLIC</span>
        </aside>

        {/* Bottom Left Intro Copy & CTA */}
        <div
          className="absolute bottom-[max(2rem,env(safe-area-inset-bottom,2rem))] md:bottom-[max(5.6vw,2.5rem)] left-5 md:left-[max(5.6vw,2rem)] max-w-[21rem] md:max-w-[26rem] flex flex-col items-start gap-4 anim-intro-in"
        >
          <p className="font-sans font-normal text-[14px] md:text-[15px] leading-[1.45] text-ink/90 tracking-[-0.015em] bg-white/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-1.5 md:p-0 rounded-lg">
            Design engineer and systems architect crafting tactile interfaces, fluid systems, and spatial web experiences.
          </p>

          <Link
            href="/explore"
            className="pointer-events-auto inline-flex items-center gap-2.5 min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-full bg-white/95 text-ink font-mono text-[11px] md:text-[12px] uppercase tracking-[0.14em] font-medium border border-ink/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <span>Explore my work</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-ink/70"
              aria-hidden="true"
            >
              <path
                d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
