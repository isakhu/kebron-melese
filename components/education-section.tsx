'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { education } from '../data/education';

export function EducationSection() {
  return (
    <section id="education" className="section-container py-24">
      <SectionTitle
        title="Education"
        subtitle="Academic qualifications and professional development that support banking leadership."
      />
      <div className="space-y-6">
        {education.map((item) => (
          <motion.div
            key={`${item.degree}-${item.institution}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-end">
              <div>
                <h3 className="text-2xl font-semibold text-brand">{item.degree}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.field}</p>
              </div>
              <div className="flex flex-col gap-2 text-right sm:text-left">
                {item.year && <p className="rounded-full bg-brand/5 px-4 py-2 text-sm font-semibold text-brand">{item.year}</p>}
                <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{item.location}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-700">{item.institution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
