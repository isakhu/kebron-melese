'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Mail, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { profile } from '../data/profile';

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface-darker dark:bg-surface-darker py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>
      <div className="section-container relative grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Banking Operations Specialist</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl leading-tight">
            Kebron Kebede Olana
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary">
            Project Manager candidate with proven expertise in banking operations, business analysis, and operational documentation. Currently leading payment systems and process improvement initiatives at Cooperative Bank of Oromia.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/Kebron-CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3.5 text-sm font-semibold text-surface-darker hover:bg-brand-light transition duration-300 hover:shadow-glow group"
            >
              Download CV
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-brand/30 px-8 py-3.5 text-sm font-semibold text-brand hover:border-brand hover:bg-brand/5 transition duration-300"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-glass p-6 hover:border-brand/50 hover:bg-brand/5 transition duration-300">
              <div className="flex items-center gap-3 text-brand">
                <Briefcase className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">Current Role</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-text-primary">Card Banking Officer</p>
              <p className="mt-1 text-sm text-text-secondary">Cooperative Bank of Oromia</p>
            </div>
            <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-glass p-6 hover:border-brand/50 hover:bg-brand/5 transition duration-300">
              <div className="flex items-center gap-3 text-brand">
                <Mail className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">Contact</span>
              </div>
              <div className="mt-4 space-y-1 text-sm">
                <p className="text-text-primary font-medium">{profile.email}</p>
                <p className="text-text-secondary">{profile.phone}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-glass shadow-card hover:shadow-glow transition duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand/20 to-transparent" />
              <Image
                src="/kebron-profile.jpg"
                alt="Professional headshot of Kebron Kebede Olana"
                width={520}
                height={520}
                className="relative mx-auto h-auto w-full p-8"
                priority
              />
            </div>
            <div className="border-t border-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Professional Summary</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Executive portfolio highlighting banking operations, business analysis, system enhancement, and stakeholder leadership.
              </p>
              <div className="mt-6 flex items-center gap-3 group/link">
                <Linkedin className="h-5 w-5 text-brand group-hover/link:text-brand-light transition" />
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-brand group-hover/link:text-brand-light transition"
                >
                  Visit LinkedIn profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
