"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * InitialLoader — Animated loading screen with percentage counter.
 *
 * Performance contract:
 * - Counter updates use direct DOM manipulation (ref.textContent) — ZERO React re-renders
 *   during the 1.8s counting phase.
 * - Only ONE React re-render fires at the very end: `setLoading(false)`.
 */
export default function InitialLoader() {
  const [loading, setLoading] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show loader once per browser session
    if (typeof window !== "undefined" && sessionStorage.getItem("has_loaded_intro")) {
      return;
    }

    setLoading(true);
    document.body.style.overflow = "hidden";

    let start = 0;
    const duration = 700; // 0.7s quick, snappy intro
    const interval = 25;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        if (counterRef.current) counterRef.current.textContent = "100%";
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
          try {
            sessionStorage.setItem("has_loaded_intro", "true");
          } catch {}
        }, 200);
      } else {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.floor(start)}%`;
        }
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="overflow-hidden">
            <motion.div
              ref={counterRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-[var(--font-display)] text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter"
            >
              0%
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-10 left-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white/50 text-xs md:text-sm tracking-widest uppercase font-semibold">
              Gavra Tsany Atmaja
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
