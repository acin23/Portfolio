import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ScrollTextMarquee from "@/components/ScrollTextMarquee";

// Code-split: below-the-fold interactive sections load as separate JS chunks
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <div className="flex flex-col pb-12 overflow-hidden">
      {/* 1. Hero Landing */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. GPU CSS marquee divider: PROJECTS */}
      <ScrollTextMarquee
        text="Featured Projects"
        direction="left"
        duration={20}
      />

      {/* 4. Responsive Projects Grid */}
      <ProjectsSection />

      {/* 5. GPU CSS marquee divider: EXPERIENCE */}
      <ScrollTextMarquee
        text="Experience & Leadership"
        direction="right"
        duration={25}
        outlined
      />

      {/* 6. Experience Section */}
      <ExperienceSection />

      {/* 7. GPU CSS marquee divider: TECH STACK */}
      <ScrollTextMarquee
        text="Tech Stack"
        direction="left"
        duration={18}
      />

      {/* 8. Skills Section */}
      <SkillsSection />

      {/* 9. Contact Section */}
      <ContactSection />
    </div>
  );
}
