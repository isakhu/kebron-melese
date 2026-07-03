'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Mail, Linkedin, ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/profile';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface-darker py-24 md:py-36"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb absolute -top-40 right-0 h-[600px] w-[600px] bg-brand/20" />
        <div className="orb absolute bottom-0 left-0 h-[500px] w-[500px] bg-accent-violet/15" />
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-brand/5" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,217,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,217,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="section-container relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Left — text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/8 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Open to Opportunities
            </span>
          </div>

          {/* Hero name */}
          <h1 className="font-display text-hero font-bold leading-[1.05] tracking-[-0.03em]">
            <span className="gradient-text-subtle">Kebron</span>{' '}
            <span className="gradient-text-subtle">Kebede</span>
            <br />
            <span className="gradient-text">Olana</span>
          </h1>

          {/* Role */}
          <p className="mt-5 text-xl font-semibold text-text-secondary md:text-2xl">
            Banking Operations Specialist{' '}
            <span className="text-text-muted font-normal">&amp; Project Manager Candidate</span>
          </p>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-[1.8] text-text-secondary">
            Proven expertise in card banking operations, business analysis, and payment systems at Cooperative Bank of Oromia. Driving process improvement and stakeholder collaboration to deliver measurable results.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/Kebron-CV.pdf"
              download
              className="group inline-flex items-center gap-2.5 rounded-xl bg-brand px-7 py-3.5 text-sm font-bold text-surface-darker shadow-glow hover:bg-brand-light hover:shadow-glow-lg transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Download CV
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-brand/25 bg-brand/5 px-7 py-3.5 text-sm font-bold text-brand hover:border-brand/60 hover:bg-brand/10 hover:shadow-glow-sm transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Info cards row */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="glass-card glass-card-hover rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10">
                  <Briefcase className="h-4 w-4 text-brand" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Current Role</span>
              </div>
              <p className="text-base font-bold text-text-primary">Card Banking Officer</p>
              <p className="mt-1 text-sm text-text-secondary">Cooperative Bank of Oromia</p>
            </div>
            <div className="glass-card glass-card-hover rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10">
                  <Mail className="h-4 w-4 text-brand" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Contact</span>
              </div>
              <p className="text-sm font-bold text-text-primary">{profile.email}</p>
              <p className="mt-1 text-sm text-text-secondary">{profile.phone}</p>
            </div>
          </div>
        </motion.div>

        {/* Right — profile card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Glow ring behind card */}
          <div className="absolute inset-0 rounded-3xl bg-brand-gradient opacity-10 blur-2xl scale-95" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-glass shadow-card hover:shadow-glow transition-all duration-500 group">
            {/* Top gradient overlay */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand/15 to-transparent" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <Image
                src="/kebron-profile.jpg"
                alt="Professional headshot of Kebron Kebede Olana"
                width={520}
                height={520}
                className="h-auto w-full px-8 pt-8 pb-4"
                priority
              />
            </div>

            <div className="relative border-t border-white/8 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Professional Summary</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Executive portfolio highlighting banking operations, business analysis, system enhancement, and stakeholder leadership.
              </p>
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center gap-2.5 text-sm font-bold text-brand hover:text-brand-light transition-colors duration-200 group/link"
              >
                <Linkedin className="h-4 w-4" />
                <span className="group-hover/link:underline">LinkedIn Profile</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-darker to-transparent" />
    </section>
  );
}
