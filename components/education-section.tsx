'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { education } from '../data/education';

export function EducationSection() {
  return (
    <section id="education" className="section-container py-32">
      <SectionTitle
        title="Education"
        subtitle="Academic qualifications and professional development that support banking leadership."
      />
      <div className="space-y-5">
        {education.map((item, idx) => (
          <motion.div
            key={`${item.degree}-${item.institution}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-8 hover:border-brand/30 transition duration-300"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-2xl font-bold text-text-primary">{item.degree}</h3>
                <p className="mt-2 text-sm font-medium text-brand">{item.field}</p>
              </div>
              <div className="flex flex-col gap-2 text-right sm:text-left">
                {item.year && <p className="rounded-lg bg-brand/10 px-3 py-1.5 text-sm font-semibold text-brand whitespace-nowrap">{item.year}</p>}
                <p className="rounded-lg bg-white/10 border border-white/10 px-3 py-1.5 text-sm font-semibold text-text-secondary whitespace-nowrap">{item.location}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">{item.institution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
