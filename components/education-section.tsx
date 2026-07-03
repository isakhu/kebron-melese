'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { CertificationsSection } from './certifications-section';
import { education } from '../data/education';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export function EducationSection() {
  return (
    <section id="education" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="Education"
          accent="Academic Background"
          subtitle="Academic qualifications that support banking leadership and project management."
        />

        <div className="space-y-4">
          {education.map((item, idx) => (
            <motion.div
              key={`${item.degree}-${item.institution}`}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card glass-card-hover group rounded-2xl p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                {/* Left — degree info */}
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/15 transition-colors duration-300">
                    <GraduationCap className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-primary">{item.degree}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand">{item.field}</p>
                    <p className="mt-1 text-sm text-text-secondary">{item.institution}</p>
                  </div>
                </div>

                {/* Right — meta badges */}
                <div className="flex flex-shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
                  {item.year && (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand/20 bg-brand/8 px-3 py-1.5 text-xs font-bold text-brand">
                      <Calendar className="h-3 w-3" />
                      {item.year}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-text-secondary">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications embedded below education */}
        <CertificationsSection />
      </div>
    </section>
  );
}
