"use client";

import Image from "next/image";
import { Lock, Sparkles, ExternalLink } from "lucide-react";

interface ProjectHeroFrameProps {
  imageSrc: string;
  title: string;
  slug: string;
  gradient?: string;
  liveUrl?: string;
}

export default function ProjectHeroFrame({
  imageSrc,
  title,
  slug,
  gradient,
  liveUrl,
}: ProjectHeroFrameProps) {
  const simulatedDomain =
    slug === "healthybuddy"
      ? "healthybuddy.binus.app/dashboard"
      : slug === "embun-management-system"
      ? "embuncafe.app/online-order"
      : slug === "scholarpath-ai"
      ? "scholarpath.ai/explore"
      : `${slug}.app/overview`;

  return (
    <div className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] shadow-xl shadow-[var(--shadow-color)] transition-colors duration-250">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-3.5 bg-[var(--card-bg)] border-b border-[var(--border-subtle)]">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/10 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/10 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/10 inline-block" />
        </div>

        {/* Browser URL Simulation */}
        <div className="flex items-center gap-2 px-3 md:px-5 py-1 md:py-1.5 rounded-full bg-[var(--chip-bg)] border border-[var(--border-subtle)] text-[11px] md:text-xs text-[var(--text-muted)] max-w-[240px] sm:max-w-md w-full justify-center">
          <Lock size={12} className="text-emerald-500 shrink-0" />
          <span className="truncate font-mono">{simulatedDomain}</span>
        </div>

        {/* Live or Status Badge */}
        <div className="flex items-center gap-2">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-semibold text-[var(--accent-color)] hover:underline"
            >
              <span>Visit</span>
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[var(--text-muted)] px-2.5 py-0.5 rounded-full bg-[var(--chip-bg)]">
              <Sparkles size={11} className="text-[var(--accent-color)]" />
              Verified Showcase
            </span>
          )}
        </div>
      </div>

      {/* Main Preview Screen */}
      <div
        className="relative w-full aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.15/1] overflow-hidden bg-[var(--bg-base)]"
        style={{ background: !imageSrc && gradient ? gradient : undefined }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${title} Preview`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain md:object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.01]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/90 text-2xl md:text-4xl font-bold font-[var(--font-display)] drop-shadow-lg tracking-wide">
              {title} Preview
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
