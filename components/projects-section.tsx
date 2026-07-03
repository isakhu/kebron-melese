'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { projects } from '../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container py-32">
      <SectionTitle
        title="Projects"
        subtitle="Case study overview of banking initiatives, requirement documentation, and process optimization."
      />
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.05 }}
            className="grid gap-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-8 hover:border-brand/30 transition duration-300 lg:grid-cols-[0.85fr_0.95fr]"
          >
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-lg bg-brand/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Timeline</p>
              <p className="text-base font-semibold text-text-secondary">{project.timeline}</p>
            </div>
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-white/5 border border-white/10 p-4 hover:border-brand/30 transition">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Overview</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.overview}</p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-4 hover:border-brand/30 transition">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Business challenge</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.challenge}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-white/5 border border-white/10 p-4 hover:border-brand/30 transition">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Solution</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.solution}</p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-4 hover:border-brand/30 transition">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Business value</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.value}</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Responsibilities</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2 text-text-secondary">
                      <span className="text-brand">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Tools used</p>
                  <p className="mt-2 text-sm text-text-secondary">{project.tools.join(', ')}</p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Lessons learned</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {project.lessons.map((lesson) => (
                      <li key={lesson} className="text-text-secondary">• {lesson}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3">
                <Image
                  src="/project-placeholder.svg"
                  alt={project.imageAlt}
                  width={760}
                  height={340}
                  className="h-auto w-full rounded-md"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
