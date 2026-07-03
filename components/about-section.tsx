'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { profile } from '../data/profile';

export function AboutSection() {
  return (
    <section id="about" className="section-container py-32">
      <SectionTitle
        title="About"
        subtitle="Professional story and leadership philosophy for banking transformation."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid gap-8 lg:grid-cols-[1fr_0.95fr]"
      >
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Career objective</p>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            To secure a Project Manager role where I can leverage banking domain expertise, analytical thinking, and documented project coordination capabilities to drive successful initiatives in financial services or related industries.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">Mission</p>
              <p className="text-base leading-relaxed text-text-secondary">
                Drive banking transformation and operational excellence through disciplined project execution, stakeholder collaboration, and data-driven decision support.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">Leadership approach</p>
              <p className="text-base leading-relaxed text-text-secondary">
                Focused on clarity, accountability, evidence-based planning, and building trust across business and technical teams to ensure project success.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-6">Professional profile</p>
            <div className="space-y-5 text-base leading-relaxed text-text-secondary">
              {profile.summary.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-6 hover:border-brand/30 transition">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Employment</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>Cooperative Bank of Oromia</li>
                <li className="text-text-muted">February 2023 – Present</li>
                <li className="text-brand font-semibold">Card Banking Officer</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-glass p-6 hover:border-brand/30 transition">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Focus areas</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>Project Management</li>
                <li>Business Analysis</li>
                <li>Operational Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
