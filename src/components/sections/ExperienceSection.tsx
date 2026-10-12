"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  experienceData,
  experienceSummary,
  snapshotData,
  type ExperienceItem,
} from "@/data/profile";
import {
  fadeUpVariants,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Users,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const typeIcons: Record<ExperienceItem["type"], React.ReactNode> = {
  leadership: <Users size={18} />,
  teaching: <GraduationCap size={18} />,
  event: <Calendar size={18} />,
  sports: <Briefcase size={18} />,
};

export default function ExperienceSection() {
  const [selectedSnapshot, setSelectedSnapshot] = useState<(typeof snapshotData)[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section
      id="experience"
      className="pt-16 md:pt-24 pb-20 md:pb-28 scroll-mt-24"
      aria-label="Experience and leadership"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="mb-4"
        >
          <span className="section-label">Trajectory</span>
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          className="section-heading text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] mb-6"
        >
          Leadership &amp; Experience
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.15}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mb-12 md:mb-16 leading-relaxed font-normal"
        >
          {experienceSummary}
        </motion.p>

        {/* Experience Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group p-6 md:p-8 rounded-[1.75rem] bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-[var(--accent-color)]/40 flex gap-5 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              {/* Icon Container */}
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[var(--chip-bg)] border border-[var(--border-subtle)] text-[var(--accent-text)] flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm">
                {typeIcons[exp.type]}
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-2 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px] font-medium px-3 py-1 rounded-full bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--border-subtle)]">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-[var(--font-display)] text-[var(--text-primary)] leading-snug">
                  {exp.role}
                </h3>
                <p className="text-[15px] font-semibold text-[var(--accent-text)]">
                  {exp.organization}
                </p>
                {exp.description && (
                  <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed mt-1 font-normal">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight moments gallery */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mt-16 md:mt-20 pt-12 border-t border-[var(--border-subtle)]"
        >
          {/* Section Header with Navigation Arrows */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="section-label block mb-1">Snapshots</span>
              <span className="text-xs md:text-sm font-medium text-[var(--text-muted)]">
                Campus Activities &amp; Mentorship
              </span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="p-2.5 rounded-full bg-[var(--chip-bg)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-text)] transition-colors shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                className="p-2.5 rounded-full bg-[var(--chip-bg)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-text)] transition-colors shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Track (3 items visible at once on desktop) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {snapshotData.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => setSelectedSnapshot(item)}
                className="group relative aspect-[4/3] w-[82vw] sm:w-[46vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-[var(--accent-color)]/50 transition-all duration-300 shadow-sm dark:shadow-none cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Expand icon on hover */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={14} />
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                  <span className="text-white text-base md:text-lg font-bold font-[var(--font-display)] leading-snug drop-shadow-md">
                    {item.title}
                  </span>
                  <span className="text-white/80 text-xs md:text-sm font-medium mt-0.5 line-clamp-1">
                    {item.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedSnapshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSnapshot(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSnapshot(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-md"
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative w-full aspect-[4/3] max-h-[65vh] bg-black">
                <Image
                  src={selectedSnapshot.image}
                  alt={selectedSnapshot.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 bg-[var(--card-bg)] border-t border-[var(--border-subtle)] flex flex-col gap-1">
                <h4 className="text-xl font-bold font-[var(--font-display)] text-[var(--text-primary)]">
                  {selectedSnapshot.title}
                </h4>
                <p className="text-sm font-medium text-[var(--accent-text)]">
                  {selectedSnapshot.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
