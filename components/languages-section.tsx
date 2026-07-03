'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { languages } from '../data/languages';

export function LanguagesSection() {
  return (
    <section id="languages" className="section-container py-24">
      <SectionTitle
        title="Languages"
        subtitle="Professional multilingual capability supporting banking communications and stakeholder engagement."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {languages.map((item) => (
          <motion.div
            key={item.language}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel text-center"
          >
            <h3 className="text-xl font-semibold text-brand">{item.language}</h3>
            <p className="mt-4 rounded-full bg-brand/5 px-4 py-2 inline-flex text-sm font-semibold text-brand">
              {item.proficiency}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
