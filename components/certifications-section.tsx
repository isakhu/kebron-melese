'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { certifications } from '../data/certifications';

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-container py-32">
      <SectionTitle
        title="Certifications"
        subtitle="Professional credentials with room to update verification links when available."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-8 hover:border-brand/30 hover:bg-brand/5 transition duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-brand">{item.title}</p>
                <p className="mt-2 text-sm text-text-secondary">{item.institution}</p>
              </div>
              <span className="rounded-lg bg-brand/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand whitespace-nowrap">
                {item.status}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-brand hover:text-brand-light transition">
              <ExternalLink className="h-4 w-4 flex-shrink-0" />
              <a href={item.link} target="_blank" rel="noreferrer" className="font-medium">
                Verify credential
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
