'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { experience } from '../data/experience';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container py-24">
      <SectionTitle
        title="Experience"
        subtitle="Role details and execution areas across card banking operations."
      />
      <div className="space-y-8">
        {experience.map((item) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.34em] text-brand/70">Current position</p>
                <h3 className="mt-3 text-2xl font-semibold text-brand">{item.role}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.organization} · {item.location}</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-brand/5 px-4 py-2 text-sm font-semibold text-brand">
                {item.period}
              </span>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Key responsibilities</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 text-brand" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
