"use client";

import Image from "next/image";
import { profileData } from "@/data/profile";


export default function ProfileCard() {
  return (
    <div className="group relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#151515] border border-[var(--border-subtle)] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
      {/* Subtle background glow inside the card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent dark:from-white/10 pointer-events-none" />

      {/* Portrait Image */}
      <div className="absolute inset-0 flex flex-col justify-end pt-10 px-8 pb-32 z-10">
        <Image
          src="/images/profile-photo.png"
          alt={profileData.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
          priority
          className="object-cover object-center select-none pointer-events-none drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Glassmorphism ID Badge */}
      <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-black/10 dark:border-white/10 flex items-center justify-between shadow-xl z-30 transition-all duration-300 group-hover:border-[var(--accent-color)]/40">
        <div className="flex flex-col min-w-0 pr-2">
          <span className="text-sm font-bold text-[var(--text-primary)] truncate">
            {profileData.name}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[var(--text-secondary)] font-semibold mt-0.5 truncate">
            {profileData.university}
          </span>
        </div>
        <span className="text-[11px] font-bold text-[var(--text-primary)] flex items-center gap-2 bg-black/[0.04] dark:bg-white/10 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#06D6A0] animate-pulse shadow-[0_0_8px_#06D6A0]" />
          Available for Internships
        </span>
      </div>
    </div>
  );
}
