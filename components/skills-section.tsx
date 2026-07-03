'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { skills } from '../data/skills';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const categoryColors = [
  { dot: 'bg-brand', border: 'border-brand/20 hover:border-brand/50', heading: 'text-brand' },
  { dot: 'bg-accent-violet', border: 'border-accent-violet/20 hover:border-accent-violet/50', heading: 'text-accent-violet' },
  { dot: 'bg-accent-emerald', border: 'border-accent-emerald/20 hover:border-accent-emerald/50', heading: 'text-accent-emerald' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-28">
      <div className="section-container">
        <SectionTitle
          title="Skills"
          accent="Capabilities"
          subtitle="Core competencies across banking analysis, project leadership, and technical operations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {skills.map((group, idx) => {
            const color = categoryColors[idx % categoryColors.length];
            return (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className={`glass-card rounded-2xl border ${color.border} p-7 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.08)] hover:-translate-y-1`}
              >
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${color.dot} shadow-glow-sm`} />
                  <h3 className={`font-display text-lg font-bold ${color.heading}`}>{group.title}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-text-secondary hover:border-brand/30 hover:bg-brand/6 hover:text-brand transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
