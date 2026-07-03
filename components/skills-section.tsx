'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { skills } from '../data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="section-container py-24">
      <SectionTitle
        title="Skills"
        subtitle="Core capabilities grouped for banking analysis, project leadership, and technical operations."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {skills.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel"
          >
            <h3 className="text-xl font-semibold text-brand">{group.title}</h3>
            <div className="mt-6 space-y-3">
              {group.items.map((skill) => (
                <div key={skill} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
