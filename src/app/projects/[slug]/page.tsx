import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, Lightbulb, CheckCircle2, Cpu } from "lucide-react";
import ProjectHeroFrame from "@/components/projects/ProjectHeroFrame";
import ProjectGallery from "@/components/projects/ProjectGallery";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === resolvedParams.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="pb-24">
      {/* ─── Hero Header ─── */}
      <header className="section-container pt-32 pb-14">
        <Link 
          href="/#projects" 
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors mb-8 md:mb-12"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> 
          Back to Selected Projects
        </Link>
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--chip-bg)] text-[var(--accent-text)] text-xs font-bold uppercase tracking-widest mb-4 border border-[var(--border-subtle)]">
            Case Study • {project.role}
          </div>
          <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6 text-[var(--text-primary)]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-normal">
            {project.summary}
          </p>
        </div>

        {/* Project Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 py-8 border-y border-[var(--border-subtle)]">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)]">
              Role
            </span>
            <span className="font-semibold text-base md:text-lg text-[var(--text-primary)]">
              {project.role}
            </span>
          </div>

          <div className="flex flex-col gap-1.5 col-span-2 md:col-span-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)]">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--border-subtle)] rounded-full text-xs md:text-[13px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-text)]">
              {project.liveUrl || project.repoUrl ? "Links" : "Category"}
            </span>
            {project.liveUrl || project.repoUrl ? (
              <div className="flex flex-wrap gap-4 pt-0.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-semibold text-sm hover:text-[var(--accent-color)] transition-colors"
                  >
                    Live Demo
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-semibold text-sm hover:text-[var(--accent-color)] transition-colors"
                  >
                    Code Repo
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            ) : (
              <span className="font-semibold text-base text-[var(--text-secondary)]">
                Software Engineering
              </span>
            )}
          </div>
        </div>

        {/* Highlight Pills */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-sm"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  {h.label}
                </span>
                <span className="font-bold text-base text-[var(--text-primary)] block">
                  {h.value}
                </span>
                {h.description && (
                  <span className="text-xs text-[var(--text-secondary)] mt-0.5 block line-clamp-1">
                    {h.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ─── Hero Mockup Browser Frame ─── */}
      <section className="section-container mb-20 md:mb-28">
        <ProjectHeroFrame
          imageSrc={project.image || ""}
          title={project.title}
          slug={project.slug}
          gradient={project.imageGradient}
          liveUrl={project.liveUrl}
        />
      </section>

      {/* ─── Content Breakdown & Architecture ─── */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (The Challenge & The Solution) */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {/* The Challenge */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20">
                  <Lightbulb size={20} />
                </span>
                <h2 className="section-heading text-3xl md:text-4xl text-[var(--text-primary)]">
                  The Challenge
                </h2>
              </div>
              <p className="text-lg md:text-xl leading-[1.8] text-[var(--text-secondary)] font-normal">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <CheckCircle2 size={20} />
                </span>
                <h2 className="section-heading text-3xl md:text-4xl text-[var(--text-primary)]">
                  The Solution
                </h2>
              </div>
              <p className="text-lg md:text-xl leading-[1.8] text-[var(--text-secondary)] font-normal">
                {project.solution}
              </p>

              {/* Architecture & Engineering Pillars */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="mt-6 flex flex-col gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-text)] flex items-center gap-2">
                    <Cpu size={16} /> Key Technical Pillars
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.architecture.map((arch) => (
                      <div
                        key={arch.title}
                        className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent-color)]/40 transition-colors shadow-sm"
                      >
                        <h4 className="font-bold text-base text-[var(--text-primary)] mb-2 font-[var(--font-display)]">
                          {arch.title}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {arch.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (Impact & Learnings Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Impact */}
            <div className="glass-card p-7 md:p-8 flex flex-col gap-4 border-l-4 border-l-[var(--accent-color)]">
              <div className="flex items-center gap-2.5">
                <Award size={22} className="text-[var(--accent-color)]" />
                <h3 className="font-[var(--font-display)] font-bold text-2xl text-[var(--text-primary)]">
                  Measurable Impact
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] font-normal leading-relaxed text-base">
                {project.impact}
              </p>
            </div>

            {/* Key Learnings */}
            <div className="glass-card p-7 md:p-8 flex flex-col gap-4 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-2.5">
                <Lightbulb size={22} className="text-amber-500" />
                <h3 className="font-[var(--font-display)] font-bold text-2xl text-[var(--text-primary)]">
                  Key Learnings
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] font-normal leading-relaxed text-base">
                {project.keyLearning}
              </p>
            </div>
          </div>
        </div>

        {/* ─── Visual Showcase Gallery (All Images) ─── */}
        {project.gallery && project.gallery.length > 0 ? (
          <ProjectGallery items={project.gallery} projectTitle={project.title} />
        ) : (
          /* Clean Fallback if no full gallery exists */
          <div className="mt-20 pt-12 border-t border-[var(--border-subtle)]">
            <span className="section-label block mb-2">Capabilities</span>
            <h3 className="section-heading text-2xl md:text-3xl mb-6">Key System Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.screenshots.map((s) => (
                <div
                  key={s}
                  className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] font-semibold text-center text-sm"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ─── Next Project Footer ─── */}
      <section className="mt-32 border-t border-[var(--border-subtle)]">
        <Link 
          href={`/projects/${nextProject.slug}`} 
          className="group block section-container py-24 text-center hover:bg-[var(--card-bg-hover)] transition-colors duration-500"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-text)] mb-4 inline-block">
            Next Case Study →
          </span>
          <h3 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors">
            {nextProject.title}
          </h3>
          <p className="text-sm md:text-base text-[var(--text-muted)] mt-4 max-w-lg mx-auto">
            {nextProject.summary}
          </p>
        </Link>
      </section>
    </article>
  );
}
