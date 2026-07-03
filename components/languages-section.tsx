'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { languages } from '../data/languages';

export function LanguagesSection() {
  return (
    <section id="languages" className="section-container py-32">
      <SectionTitle
        title="Languages"
        subtitle="Professional multilingual capability supporting banking communications and stakeholder engagement."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {languages.map((item, idx) => (
          <motion.div
            key={item.language}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-8 text-center hover:border-brand/30 hover:bg-brand/5 transition duration-300"
          >
            <h3 className="text-xl font-bold text-text-primary">{item.language}</h3>
            <p className="mt-4 inline-flex rounded-lg bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
              {item.proficiency}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
