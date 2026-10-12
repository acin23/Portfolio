"use client";

import { useRef, useEffect, useState, useCallback, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ─── Gallery Card ─── */
const GalleryCard = memo(function GalleryCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group relative flex-shrink-0 w-full md:w-[50vw] lg:w-[38vw] xl:w-[32vw] flex flex-col overflow-hidden rounded-[1.75rem] bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent-color)]/60 transition-colors duration-300 shadow-sm dark:shadow-none hover:shadow-lg hover:shadow-[var(--accent-color)]/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: "easeOut",
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View project: ${project.title}`}
      />

      {/* Hover glow ring */}
      <div className="absolute -inset-px rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[var(--accent-color)]/20 via-transparent to-[var(--accent-color)]/10" />

      {/* Thumbnail with 1.05x hover zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-surface)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ background: project.imageGradient }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-end p-6 pointer-events-none">
          <span className="text-white text-xl font-extrabold font-[var(--font-display)] tracking-tight drop-shadow-md">
            {project.title}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 md:p-7 gap-4 justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-wider text-[var(--accent-text)] mb-1">
              {project.role}
            </p>
            <h3 className="text-lg font-bold font-[var(--font-display)] text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-text)] transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="shrink-0 p-2.5 rounded-full bg-[var(--chip-bg)] text-[var(--text-primary)] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2 font-normal">
          {project.summary}
        </p>

        <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[13px] font-medium rounded-full bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--border-subtle)]"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-[13px] font-medium rounded-full bg-[var(--chip-bg)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
          <span className="shrink-0 text-sm font-semibold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all duration-300 flex items-center gap-1">
            Details →
          </span>
        </div>
      </div>
    </motion.article>
  );
});

/* ─── Sticky Horizontal Scroll Projects Section ─── */
export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);

  const measure = useCallback(() => {
    if (!trackRef.current || !stickyRef.current) return;
    const trackW = trackRef.current.scrollWidth;
    const viewW = stickyRef.current.clientWidth;
    setOverflow(Math.max(0, trackW - viewW));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    // Re-measure once fonts and images have settled
    const t = setTimeout(measure, 500);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [measure]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -overflow]);

  // Dynamic runway: 100vh base + proportional to overflow
  // If overflow is 0 (all cards fit), just show 100vh (no horizontal scroll needed)
  // Otherwise add enough runway for a comfortable scroll rate (~1.5px horizontal per 1px vertical)
  const runwayPx = overflow > 0 ? overflow * 1.5 : 0;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative scroll-mt-24"
      aria-label="Selected projects"
      style={{
        // If overflow > 0, use 100vh + runway; otherwise just use auto height (no pinning)
        height: overflow > 0 ? `calc(100vh + ${runwayPx}px)` : "auto",
      }}
    >
      {/* Sticky viewport (only pins when there's overflow) */}
      <div
        ref={stickyRef}
        className="w-full overflow-hidden flex flex-col"
        style={{
          position: overflow > 0 ? "sticky" : "relative",
          top: 0,
          height: overflow > 0 ? "100vh" : "auto",
        }}
      >
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 md:pt-28 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 shrink-0">
          <div>
            <span className="section-label block mb-2">Work</span>
            <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)]">
              Selected Projects
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-md font-normal leading-relaxed">
            Real-world applications I&apos;ve contributed to — from AI-powered
            platforms to enterprise management systems.
          </p>
        </div>

        {/* Card track (vertical on mobile, horizontal on desktop) */}
        <motion.div
          ref={trackRef}
          className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 px-6 md:px-12 items-stretch pb-8"
          style={{
            x: overflow > 0 ? x : 0,
            flexGrow: overflow > 0 ? 1 : undefined,
            willChange: "transform",
          }}
        >
          {projectsData.map((project, index) => (
            <GalleryCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        {/* Progress indicator (only visible when horizontal scrolling is active) */}
        {overflow > 0 && (
          <div className="px-6 md:px-12 pb-6 shrink-0">
            <div className="max-w-7xl mx-auto w-full">
              <div className="h-[2px] w-full bg-[var(--border-subtle)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--accent-color)] origin-left rounded-full"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
