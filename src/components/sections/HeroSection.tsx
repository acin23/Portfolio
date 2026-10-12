"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { ArrowRight, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";
import { fadeUpVariants } from "@/lib/animations";

export default function HeroSection() {
  const baseDelay = 0.1;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient background glow — lightweight radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-2xl opacity-[0.10] dark:opacity-[0.16] pointer-events-none"
          style={{
            background: "radial-gradient(circle, var(--accent-color) 0%, transparent 70%)",
          }}
        />
        {/* Secondary subtle glow offset */}
        <div
          className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full blur-2xl opacity-[0.05] dark:opacity-[0.10] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #667eea 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Constrained container — dead-center */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={baseDelay + 0}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--chip-bg)]/80 backdrop-blur-sm text-[13px] font-medium text-[var(--chip-text)] shadow-sm dark:shadow-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-text)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-text)]"></span>
            </span>
            <span>
              {profileData.subtitle} · {profileData.university}
            </span>
          </div>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={baseDelay + 0.1}
          className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-[-0.04em] text-[var(--text-primary)] leading-[0.98] max-w-5xl mb-6 md:mb-8"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{profileData.firstName}</span>.
        </motion.h1>

        {/* Bio / Value Statement */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={baseDelay + 0.2}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 font-normal"
        >
          {profileData.valueStatement}
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={baseDelay + 0.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 md:mb-16"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold rounded-full bg-[var(--text-primary)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[var(--shadow-color)] w-full sm:w-auto"
          >
            <span>View Projects</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold rounded-full border border-[var(--border-subtle)] bg-[var(--card-bg)]/60 backdrop-blur-sm text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:bg-[var(--card-bg-hover)] transition-all duration-300 shadow-sm dark:shadow-none active:scale-95 w-full sm:w-auto"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </Link>
        </motion.div>

        {/* Quick Highlights Row */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={baseDelay + 0.4}
          className="pt-6 border-t border-[var(--border-subtle)] w-full max-w-2xl flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[13px] sm:text-sm font-medium text-[var(--text-muted)]"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-text)]" />
            <span>GPA: {profileData.gpa}</span>
          </div>
          <span className="hidden sm:inline text-[var(--border-color)]">|</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-text)]" />
            <span>Open to {profileData.openTo}</span>
          </div>
          <span className="hidden sm:inline text-[var(--border-color)]">|</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-text)]" />
            <span>{profileData.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Centered Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
