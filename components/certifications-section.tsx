'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export function CertificationsSection() {
  return (
    <div className="mt-16">
      {/* Sub-section heading */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-violet/15">
          <Award className="h-5 w-5 text-accent-violet" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-violet">Certifications</p>
          <h3 className="font-display text-xl font-bold text-text-primary">Professional Credentials</h3>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, idx) => (
          <motion.div
            key={item.title}
            custom={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card group rounded-xl border border-white/8 p-5 hover:border-accent-violet/30 hover:bg-accent-violet/4 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-text-primary leading-snug">{item.title}</p>
                <p className="mt-1.5 text-xs text-text-secondary">{item.institution}</p>
              </div>
              <span className="flex-shrink-0 rounded-lg border border-accent-violet/20 bg-accent-violet/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-violet">
                {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
