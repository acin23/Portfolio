"use client";

import { memo, useEffect } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

/**
 * AmbientBackground — Full-viewport decorative architectural & planetary SVG background.
 *
 * Features:
 * - Planetary orbital circles with rotation & subtle pulsation.
 * - Concentric topographic curves & orbital paths.
 * - Hardware-accelerated GPU transforms for mouse and scroll parallax.
 * - Zero React re-renders via useMotionValue & requestAnimationFrame.
 */
const AmbientBackground = memo(function AmbientBackground() {
  const { scrollYProgress } = useScroll();

  // ── Motion values for mouse position (never stored in React state) ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ── Derived GPU-composited transforms ──
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const mouseOffsetX = useTransform(mouseX, (v) => v * -15);
  const mouseOffsetY = useTransform(mouseY, (v) => v * -15);

  // Combine scroll-Y parallax + mouse-Y offset into one transform value
  const combinedY = useTransform(
    [yParallax, mouseOffsetY],
    (latest: number[]) => latest[0] + latest[1]
  );

  useEffect(() => {
    // Only enable mouse parallax on devices that support hover
    const mql = window.matchMedia("(hover: hover)");
    if (!mql.matches) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
        mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Centering wrapper */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] min-w-[1200px] min-h-[1200px]">
        <motion.svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-30 dark:opacity-20 transition-opacity duration-300"
          style={{
            x: mouseOffsetX,
            y: combinedY,
            rotate: rotateParallax,
            willChange: "transform",
          }}
        >
          <g
            fill="none"
            stroke="var(--ambient-line)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Planetary Orbit Ring (Large dashed center orbit) */}
            <motion.circle
              cx="500"
              cy="500"
              r="400"
              strokeWidth="0.75"
              strokeDasharray="4 8"
              style={{ transformOrigin: "500px 500px" }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />

            {/* Planetary Body 1 (Top-Left Planet) */}
            <motion.circle
              cx="200"
              cy="300"
              r="150"
              style={{ transformOrigin: "200px 300px" }}
              animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Planetary Body 2 (Bottom-Right Planet) */}
            <motion.circle
              cx="800"
              cy="700"
              r="250"
              style={{ transformOrigin: "800px 700px" }}
              animate={{ scale: [1, 1.02, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Concentric Planetary Topographic / Orbital Contours */}
            <motion.g
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "500px 500px" }}
            >
              <path d="M -100 500 C 200 400, 300 800, 700 300 S 900 600, 1100 500" />
              <path d="M -100 450 C 250 350, 350 750, 750 250 S 950 550, 1100 450" />
              <path d="M -100 400 C 300 300, 400 700, 800 200 S 1000 500, 1100 400" />

              <path d="M 300 500 C 300 300, 700 300, 700 500 C 700 700, 300 700, 300 500" />
              <path d="M 350 500 C 350 350, 650 350, 650 500 C 650 650, 350 650, 350 500" />
              <path d="M 400 500 C 400 400, 600 400, 600 500 C 600 600, 400 600, 400 500" />
            </motion.g>

            {/* Orbital Trajectory Lines with subtle motion */}
            <motion.path
              d="M -100 -100 C 300 100, 200 800, 600 1100"
              strokeDasharray="10 20"
              animate={{ strokeDashoffset: [0, -60] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M 1100 -100 C 700 100, 800 800, 400 1100"
              strokeDasharray="5 15"
              animate={{ strokeDashoffset: [0, 60] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </g>
        </motion.svg>
      </div>
    </div>
  );
});

export default AmbientBackground;
