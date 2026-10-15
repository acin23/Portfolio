"use client";

import Link from "next/link";
import { profileData } from "@/data/profile";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] border-b transition-colors duration-250 ${scrolled ? "bg-[var(--surface)] border-[var(--nav-border)] backdrop-blur-md shadow-sm" : "bg-transparent border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <Link
            href="/"
            className="font-[var(--font-display)] font-extrabold text-xl tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors"
            aria-label="Home"
          >
            Gavra
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={profileData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full bg-[var(--accent-color)] text-[#14212B] hover:brightness-110 transition-all duration-300 shadow-md active:scale-95"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-xl border border-[var(--surface-border)] text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
              style={{ background: "var(--surface)" }}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] lg:hidden"
            style={{
              background: "color-mix(in srgb, var(--bg-base) 92%, transparent)",
              backdropFilter: "blur(16px) saturate(150%)",
              WebkitBackdropFilter: "blur(16px) saturate(150%)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between h-[4.5rem] border-b border-[var(--surface-border)]">
                <Link
                  href="/"
                  className="font-[var(--font-display)] font-extrabold text-xl tracking-tight text-[var(--text-primary)]"
                  onClick={() => setMobileOpen(false)}
                >
                  Gavra
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl border border-[var(--surface-border)] text-[var(--text-primary)] hover:bg-[var(--surface)] transition-colors"
                  style={{ background: "var(--surface)" }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-3 mt-12" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-3xl font-extrabold font-[var(--font-display)] text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors border-b border-[var(--surface-border)]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-auto pb-12"
              >
                <a
                  href={profileData.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 text-base font-bold rounded-2xl bg-[var(--accent-color)] text-[#14212B] hover:brightness-110 transition-all shadow-xl"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
