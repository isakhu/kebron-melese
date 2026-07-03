'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { languages } from '../data/languages';

const proficiencyColors: Record<string, string> = {
  Native: 'border-brand/20 bg-brand/10 text-brand',
  Fluent: 'border-accent-violet/20 bg-accent-violet/10 text-accent-violet',
  Professional: 'border-accent-emerald/20 bg-accent-emerald/10 text-accent-emerald',
  Conversational: 'border-white/10 bg-white/5 text-text-secondary',
};

export function LanguagesSection() {
  return (
    <section id="languages" className="py-28">
      <div className="section-container">
        <SectionTitle
          title="Languages"
          accent="Communication"
          subtitle="Multilingual capability supporting banking communications and stakeholder engagement."
        />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {languages.map((item, idx) => (
            <motion.div
              key={item.language}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="glass-card glass-card-hover group flex items-center gap-4 rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/15 transition-colors duration-300">
                <Globe className="h-5 w-5 text-brand" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary">{item.language}</h3>
                <span
                  className={`mt-1.5 inline-flex rounded-lg border px-2.5 py-0.5 text-xs font-bold ${
                    proficiencyColors[item.proficiency] ?? proficiencyColors['Conversational']
                  }`}
                >
                  {item.proficiency}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
