'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Building2 } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { experience } from '../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="Experience"
          accent="Work History"
          subtitle="Role details and execution areas across card banking operations."
        />

        <div className="space-y-5">
          {experience.map((item, idx) => (
            <motion.article
              key={item.role}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card glass-card-hover group rounded-2xl p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1 min-w-0">
                  {/* Company + period row */}
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <Building2 className="h-3.5 w-3.5 text-brand" />
                      <span className="font-semibold">{item.organization}</span>
                      <span>·</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  {/* Role title */}
                  <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-brand transition-colors duration-300">
                    {item.role}
                  </h3>
                </div>

                {/* Period badge */}
                <div className="flex flex-shrink-0 items-center gap-2 rounded-xl border border-brand/20 bg-brand/8 px-4 py-2">
                  <Calendar className="h-3.5 w-3.5 text-brand" />
                  <span className="text-sm font-bold text-brand whitespace-nowrap">{item.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-text-muted">Key Responsibilities</p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3">
                      <ChevronRight className="mt-0.5 h-4 w-4 text-brand flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-sm leading-relaxed text-text-secondary">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
