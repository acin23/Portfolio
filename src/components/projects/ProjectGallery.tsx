"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectGalleryItem } from "@/data/projects";
import { Maximize2, X, ChevronLeft, ChevronRight, Users, Activity, Layout, Layers, GraduationCap, Smartphone } from "lucide-react";

interface ProjectGalleryProps {
  items: ProjectGalleryItem[];
  projectTitle: string;
}

export default function ProjectGallery({ items, projectTitle }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % items.length);
    }
  }, [lightboxIndex, items.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    }
  }, [lightboxIndex, items.length]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "team & collaboration":
        return <Users size={14} className="text-amber-500" />;
      case "data analytics":
        return <Activity size={14} className="text-emerald-500" />;
      case "web interface":
        return <Layout size={14} className="text-cyan-500" />;
      case "mobile interface":
        return <Smartphone size={14} className="text-indigo-400" />;
      default:
        return <Layers size={14} className="text-[var(--accent-color)]" />;
    }
  };

  return (
    <section className="mt-16 md:mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="section-label block mb-2">Visual Artifacts & Deliverables</span>
          <h2 className="section-heading text-3xl md:text-5xl text-[var(--text-primary)]">
            Project Showcase
          </h2>
        </div>
        <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-lg leading-relaxed">
          Authentic interface captures, operational workflows, and core features delivered during project implementation.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        {items.map((item, index) => {
          const isTeamCard = item.tag.toLowerCase().includes("team");
          const isMobileCard = item.tag.toLowerCase().includes("mobile");
          const isPortrait = isTeamCard || isMobileCard || item.aspect === "portrait";

          // Dynamic bento grid colSpan
          let colSpan = "lg:col-span-6";
          if (items.length === 2) {
            colSpan = "lg:col-span-6";
          } else if (items.length === 5) {
            // Row 1: 2 wide web cards (6 + 6)
            // Row 2: 3 portrait cards (4 + 4 + 4)
            colSpan = index === 0 || index === 1 ? "lg:col-span-6" : "lg:col-span-4";
          } else {
            // 4 items (HealthyBuddy 7/5 + 7/5)
            colSpan = index % 4 === 0 || index % 4 === 2 ? "lg:col-span-7" : "lg:col-span-5";
          }

          return (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className={`group flex flex-col rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent-color)]/50 transition-colors duration-250 shadow-md shadow-[var(--shadow-color)] overflow-hidden ${colSpan}`}
            >
              {/* Media Container with Window Chrome */}
              <div
                className="relative overflow-hidden cursor-pointer bg-[var(--bg-base)] flex items-center justify-center border-b border-[var(--border-subtle)]"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View full resolution of ${item.title}`}
              >
                {/* Simulated Window / Card Header */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-[var(--surface)] border-b border-[var(--border-subtle)]">
                  {isTeamCard ? (
                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                      <GraduationCap size={15} className="text-amber-500" />
                      <span className="truncate">BINUS University • Project Team</span>
                    </div>
                  ) : isMobileCard ? (
                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                      <Smartphone size={14} className="text-indigo-400" />
                      <span className="truncate">ScholarPath Mobile Interface</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                      <span className="text-[11px] font-medium text-[var(--text-muted)] ml-2 truncate max-w-[180px] sm:max-w-[280px]">
                        {item.title}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="hidden sm:inline text-[11px] font-medium">Expand</span>
                    <Maximize2 size={13} className="text-[var(--accent-color)]" />
                  </div>
                </div>

                {/* Media Image */}
                <div
                  className={`w-full relative transition-transform duration-500 ease-out group-hover:scale-[1.02] pt-10 ${
                    isPortrait
                      ? "aspect-[4/5] min-h-[340px] sm:min-h-[400px]"
                      : "aspect-[16/10] sm:aspect-[16/9] min-h-[230px]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes={isPortrait ? "(max-width: 1024px) 100vw, 34vw" : "(max-width: 1024px) 100vw, 58vw"}
                    className={`${
                      isTeamCard
                        ? "object-cover object-[center_55%]"
                        : isMobileCard
                        ? "object-contain p-2 sm:p-3"
                        : "object-contain sm:object-cover object-top p-1 sm:p-2"
                    }`}
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {isTeamCard && (
                    <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[11px] font-medium border border-white/10 shadow-sm">
                      BINUS University • 4 Collaborators
                    </div>
                  )}

                  {isMobileCard && (
                    <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[11px] font-medium border border-white/10 shadow-sm">
                      Mobile App Interface
                    </div>
                  )}
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-6 md:p-7 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-[var(--chip-bg)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                      {getTagIcon(item.tag)}
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Full-Screen Lightbox Modal (z-[200] to sit above navbar) ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-2xl p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 inset-x-4 md:top-6 md:inset-x-8 z-[210] flex items-center justify-between text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/10">
                  {lightboxIndex + 1} of {items.length}
                </span>
                <span className="text-sm md:text-base font-semibold text-white/90 hidden sm:inline">
                  {items[lightboxIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
                  aria-label="Close image viewer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 z-[210] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-105 cursor-pointer border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Active Image Stage */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center my-auto z-[205]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[62vh] md:h-[70vh] flex items-center justify-center">
                <Image
                  src={items[lightboxIndex].src}
                  alt={items[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1200px) 95vw, 1200px"
                />
              </div>

              {/* Caption Card below */}
              <div className="mt-4 max-w-2xl text-center px-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-1.5 border border-white/10">
                  {getTagIcon(items[lightboxIndex].tag)}
                  {items[lightboxIndex].tag}
                </div>
                <h4 className="text-white text-base md:text-lg font-bold font-[var(--font-display)]">
                  {items[lightboxIndex].title}
                </h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed mt-1">
                  {items[lightboxIndex].description}
                </p>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2 mt-3">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === lightboxIndex ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 z-[210] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-105 cursor-pointer border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
