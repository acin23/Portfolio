"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { fadeUpVariants } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 scroll-mt-24"
      aria-label="Contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        {/* Main High-Contrast Container */}
        <div className="relative rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] p-10 sm:p-14 md:p-20 text-center flex flex-col items-center justify-center overflow-hidden shadow-sm dark:shadow-none">
          {/* Subtle ambient lighting */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-[0.06] dark:opacity-[0.12] pointer-events-none"
            style={{
              background: "radial-gradient(circle, var(--accent-color) 0%, transparent 70%)",
            }}
          />

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            className="flex flex-col items-center gap-3 mb-6 relative z-10"
          >
            <span className="section-label">Initiative</span>
            <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
              Let&apos;s build <br />
              <span className="gradient-text">together.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10 relative z-10 font-normal"
          >
            I&apos;m currently seeking {profileData.openTo.toLowerCase()} opportunities. Whether you have an open role, an ambitious project, or simply want to connect, my inbox is always open.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.2}
            className="flex flex-col items-center gap-6 w-full relative z-10"
          >
            {/* Primary Action Button */}
            <a
              href={profileData.email}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-bold rounded-full bg-[var(--text-primary)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[var(--shadow-color)]"
            >
              <span>Say Hello</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Social Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-[var(--chip-bg)] border border-[var(--border-subtle)] text-[var(--chip-text)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] transition-all duration-300 flex items-center justify-center shadow-sm dark:shadow-none"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-[var(--chip-bg)] border border-[var(--border-subtle)] text-[var(--chip-text)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] transition-all duration-300 flex items-center justify-center shadow-sm dark:shadow-none"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/gvvra__/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-[var(--chip-bg)] border border-[var(--border-subtle)] text-[var(--chip-text)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] transition-all duration-300 flex items-center justify-center shadow-sm dark:shadow-none"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
