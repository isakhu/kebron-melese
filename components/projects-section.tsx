'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { projects } from '../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-container py-24">
      <SectionTitle
        title="Projects"
        subtitle="Case study overview of banking initiatives, requirement documentation, and process optimization."
      />
      <div className="space-y-10">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel lg:grid-cols-[0.85fr_0.95fr]"
          >
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand">
                {project.category}
              </span>
              <h3 className="text-2xl font-semibold text-brand">{project.title}</h3>
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Timeline</p>
              <p className="text-base font-semibold text-slate-700">{project.timeline}</p>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Overview</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{project.overview}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Business challenge</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{project.challenge}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Solution</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{project.solution}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Business value</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{project.value}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Responsibilities</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="list-disc pl-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Tools used</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{project.tools.join(', ')}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Lessons learned</p>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                    {project.lessons.map((lesson) => (
                      <li key={lesson} className="list-disc pl-5">{lesson}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4">
                <Image
                  src="/project-placeholder.svg"
                  alt={project.imageAlt}
                  width={760}
                  height={340}
                  className="h-auto w-full rounded-[1.4rem]"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
