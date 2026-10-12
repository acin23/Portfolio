"use client";

import React from "react";

interface ScrollTextMarqueeProps {
  /** The text to display */
  text: string;
  /** Additional Tailwind classes on the outer wrapper */
  className?: string;
  /** If true, text renders with a stroke-only / outlined style */
  outlined?: boolean;
  /** Direction of movement: left or right */
  direction?: "left" | "right";
  /** Animation duration in seconds (controls speed: higher = slower) */
  duration?: number;
}

/**
 * GPU-Accelerated CSS Infinite Marquee
 * - Uses pure CSS transforms (translate3d) with will-change and backface-visibility
 * - Runs off the main thread at a smooth 60fps/120fps with zero JS-per-frame overhead
 * - Seamless loop with identical duplicate group
 * - High-contrast Awwwards-style typography
 * - Fully accessible: marked aria-hidden="true"
 * - Respects prefers-reduced-motion
 */
export default function ScrollTextMarquee({
  text,
  className = "",
  outlined = false,
  direction = "left",
  duration = 60,
}: ScrollTextMarqueeProps) {
  // Awwwards-style high contrast typography styling
  const textStyle = outlined
    ? "text-transparent [-webkit-text-stroke:2px_var(--text-primary)] opacity-75 dark:opacity-85 select-none transition-all duration-300 hover:opacity-100"
    : "text-[var(--text-primary)] opacity-90 dark:opacity-95 select-none transition-all duration-300 hover:text-[var(--accent-text)]";

  // Content block: duplicated items to ensure width > 2500px for seamless looping on 1440px and 1920px monitors
  const contentItems = (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block font-[var(--font-display)] text-[clamp(4.5rem,10vw,8.5rem)] font-black uppercase leading-none tracking-[-0.03em] mr-8 ${textStyle}`}
        >
          {text}
          <span
            className="inline-block ml-8 text-[var(--accent-color)] opacity-100"
            aria-hidden="true"
          >
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none pointer-events-none w-full py-2 ${className}`}
      aria-hidden="true"
      style={
        {
          "--marquee-duration": `${duration}s`,
          contain: "layout paint",
        } as React.CSSProperties
      }
    >
      <div
        className={
          direction === "right" ? "marquee-track-right" : "marquee-track-left"
        }
      >
        {/* Primary content group */}
        {contentItems}
        {/* Exact duplicate group for seamless infinite looping */}
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={`inline-block font-[var(--font-display)] text-[clamp(4.5rem,10vw,8.5rem)] font-black uppercase leading-none tracking-[-0.03em] mr-8 ${textStyle}`}
            >
              {text}
              <span
                className="inline-block ml-8 text-[var(--accent-color)] opacity-100"
                aria-hidden="true"
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
