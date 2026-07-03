'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from './ui/section-title';
import { profile } from '../data/profile';

export function AboutSection() {
  return (
    <section id="about" className="section-container py-24">
      <SectionTitle
        title="About"
        subtitle="Professional story and leadership philosophy for banking transformation."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid gap-10 lg:grid-cols-[1fr_0.95fr]"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/70">Career objective</p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            To secure a Project Manager role where I can leverage banking domain expertise, analytical thinking, and documented project coordination capabilities to drive successful initiatives in financial services or related industries.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Mission</p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Drive banking transformation and operational excellence through disciplined project execution, stakeholder collaboration, and data-driven decision support.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Leadership approach</p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Focused on clarity, accountability, evidence-based planning, and building trust across business and technical teams to ensure project success.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-panel">
            <p className="text-sm uppercase tracking-[0.32em] text-brand/70">Professional profile</p>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              {profile.summary.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Employment</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <li>Cooperative Bank of Oromia</li>
                <li>February 2023 – Present</li>
                <li className="text-brand font-semibold">Card Banking Officer</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Focus areas</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
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
