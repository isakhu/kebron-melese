'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { skills } from '../data/skills';

export function SkillsSection() {
  return (
    <section id="skills" className="section-container py-32">
      <SectionTitle
        title="Skills"
        subtitle="Core capabilities grouped for banking analysis, project leadership, and technical operations."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
            className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-8 hover:border-brand/30 hover:bg-brand/5 transition duration-300"
          >
            <h3 className="text-xl font-bold text-text-primary">{group.title}</h3>
            <div className="mt-6 space-y-3">
              {group.items.map((skill) => (
                <div key={skill} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-text-secondary hover:border-brand/30 hover:text-brand transition group-hover:bg-brand/10">
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
