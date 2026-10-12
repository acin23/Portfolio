"use client";

import { motion } from "framer-motion";
import { profileData, quickFacts } from "@/data/profile";
import { fadeUpVariants, staggerContainer, staggerItem } from "@/lib/animations";
import ProfileCard from "@/components/ui/ProfileCard";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 scroll-mt-24"
      aria-label="About me"
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
          <span className="section-label">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            className="lg:col-span-5"
          >
            <ProfileCard />
          </motion.div>

          {/* Bio Side */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.15}
              className="section-heading text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)]"
            >
              Passionate about engineering systems that <span className="gradient-text">scale</span>.
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.2}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] font-normal"
            >
              {profileData.bio}
            </motion.p>

            {/* Quick Facts Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-[var(--border-subtle)]"
            >
              {quickFacts.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={staggerItem}
                  className="flex flex-col gap-1.5"
                >
                  <span className="text-[13px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {fact.label}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    {fact.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
