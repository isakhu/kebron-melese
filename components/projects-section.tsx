'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Clock, Tag } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28">
      <div className="section-container">
        <SectionTitle
          title="Projects"
          accent="Portfolio"
          subtitle="Banking initiatives, requirement documentation, and process optimization case studies."
        />

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="glass-card glass-card-hover group overflow-hidden rounded-2xl p-8"
            >
              {/* Project header */}
              <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand/20 bg-brand/8 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
                      <Tag className="h-3 w-3" />
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2 whitespace-nowrap">
                  <Clock className="h-3.5 w-3.5 text-text-muted" />
                  <span className="text-sm font-semibold text-text-secondary">{project.timeline}</span>
                </div>
              </div>

              {/* 2-col detail grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-brand/20 transition-colors duration-200">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-text-muted">Overview</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{project.overview}</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-brand/20 transition-colors duration-200">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-text-muted">Business Challenge</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{project.challenge}</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-brand/20 transition-colors duration-200">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-text-muted">Solution</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{project.solution}</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-brand/20 transition-colors duration-200">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-text-muted">Business Value</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{project.value}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.03] p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">My Responsibilities</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <ChevronRight className="mt-0.5 h-4 w-4 text-brand flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools + Lessons */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-text-secondary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">Lessons Learned</p>
                  <ul className="space-y-1.5">
                    {project.lessons.map((lesson) => (
                      <li key={lesson} className="flex gap-2 text-sm text-text-secondary">
                        <span className="text-brand mt-0.5 flex-shrink-0">·</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
