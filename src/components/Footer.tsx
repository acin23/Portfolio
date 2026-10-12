"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Brand & Copyright */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-[var(--font-display)] font-extrabold text-2xl tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors"
            >
              Gavra
            </Link>
            <p className="text-sm font-medium text-[var(--text-muted)]">
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
          </div>

          {/* Navigation & Social Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Navigation
              </span>
              <nav className="flex flex-col gap-2.5">
                {["About", "Projects", "Experience", "Skills", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-block w-max"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[13px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Socials
              </span>
              <nav className="flex flex-col gap-2.5">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-max"
                >
                  LinkedIn
                  <ArrowUpRight
                    size={14}
                    className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-max"
                >
                  GitHub
                  <ArrowUpRight
                    size={14}
                    className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </a>
                <a
                  href={profileData.email}
                  className="group flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-max"
                >
                  Email
                  <ArrowUpRight
                    size={14}
                    className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar Removed */}
      </div>
    </footer>
  );
}
