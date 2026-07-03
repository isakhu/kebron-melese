'use client';

import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, MapPin } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      {/* Alt section background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-surface-elevated/20 to-transparent" />

      <div className="section-container relative">
        <SectionTitle
          title="About"
          accent="Who I Am"
          subtitle="Banking operations professional with a drive for project leadership and transformation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main story card — spans 2 cols */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-8 lg:col-span-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                <Target className="h-5 w-5 text-brand" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">Career Objective</h3>
            </div>
            <p className="text-base leading-[1.85] text-text-secondary">
              To secure a Project Manager role where I can leverage banking domain expertise, analytical thinking, and documented project coordination capabilities to drive successful initiatives in financial services or related industries.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Mission</p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Drive banking transformation and operational excellence through disciplined project execution, stakeholder collaboration, and data-driven decision support.
                </p>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">Leadership Approach</p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Clarity, accountability, and evidence-based planning — building trust across business and technical teams to ensure project success.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick stats column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10">
                  <TrendingUp className="h-4 w-4 text-brand" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Employment</p>
              </div>
              <p className="font-display text-sm font-bold text-text-primary">Cooperative Bank of Oromia</p>
              <p className="mt-1 text-sm text-brand font-semibold">Card Banking Officer</p>
              <p className="mt-1 text-xs text-text-muted">Feb 2023 – Present</p>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-violet/15">
                  <Users className="h-4 w-4 text-accent-violet" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Focus Areas</p>
              </div>
              <ul className="space-y-2">
                {['Project Management', 'Business Analysis', 'Operational Excellence'].map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-emerald/15">
                  <MapPin className="h-4 w-4 text-accent-emerald" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Location</p>
              </div>
              <p className="text-sm text-text-secondary">Addis Ababa, Ethiopia</p>
            </div>
          </motion.div>
        </div>

        {/* Professional profile */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-6 glass-card glass-card-hover rounded-2xl p-8"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-brand">Professional Profile</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.summary.map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-text-secondary border-l-2 border-brand/20 pl-4">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
