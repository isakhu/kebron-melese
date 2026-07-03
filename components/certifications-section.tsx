'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { certifications } from '../data/certifications';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-container py-24">
      <SectionTitle
        title="Certifications"
        subtitle="Professional credentials with room to update verification links when available."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((item) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-brand">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
              </div>
              <span className="rounded-full bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                {item.status}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-700">
              <ExternalLink className="h-4 w-4 text-brand" />
              <a href={item.link} target="_blank" rel="noreferrer" className="font-medium text-brand hover:text-brand-dark">
                Verification link
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
