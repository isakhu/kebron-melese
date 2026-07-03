'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { experience } from '../data/experience';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container py-32">
      <SectionTitle
        title="Experience"
        subtitle="Role details and execution areas across card banking operations."
      />
      <div className="space-y-6">
        {experience.map((item, idx) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
            className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-8 hover:border-brand/30 hover:bg-brand/5 transition duration-300 hover:shadow-card"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">Current position</p>
                <h3 className="mt-3 text-2xl font-bold text-text-primary">{item.role}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.organization} · {item.location}</p>
              </div>
              <span className="inline-flex items-center rounded-lg bg-brand/10 px-3 py-1.5 text-sm font-semibold text-brand whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Key responsibilities</p>
              <ul className="space-y-3">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-brand flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm leading-relaxed text-text-secondary">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
