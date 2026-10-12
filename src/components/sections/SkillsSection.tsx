"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/profile";
import {
  fadeUpVariants,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import {
  Monitor,
  Server,
  Database,
  GitBranch,
  Heart,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Monitor size={20} />,
  Backend: <Server size={20} />,
  Database: <Database size={20} />,
  Methodology: <GitBranch size={20} />,
  "Soft Skills": <Heart size={20} />,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 scroll-mt-24"
      aria-label="Skills and tools"
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
          <span className="section-label">Capabilities</span>
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          className="section-heading text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] mb-12 md:mb-16"
        >
          Skills &amp; Technologies
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={staggerItem}
              className="p-6 md:p-8 rounded-[1.75rem] bg-[var(--surface)] backdrop-blur-sm border border-[var(--surface-border)] hover:border-[var(--accent-color)]/30 flex flex-col gap-6 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[var(--chip-bg)] border border-[var(--surface-border)] text-[var(--accent-text)] flex items-center justify-center shadow-sm">
                  {categoryIcons[category] || <Monitor size={20} />}
                </div>
                <h3 className="text-lg font-bold font-[var(--font-display)] text-[var(--text-primary)]">
                  {category}
                </h3>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-[13px] font-medium rounded-full bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--surface-border)] hover:border-[var(--accent-color)]/60 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
