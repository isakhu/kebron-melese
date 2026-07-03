'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Mail, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { profile } from '../data/profile';

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient py-20">
      <div className="section-container grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.34em] text-brand/70">Project Management Professional</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand sm:text-5xl lg:text-6xl">
            Kebron Kebede Olana
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Project Manager candidate with proven expertise in banking operations, business analysis, and operational documentation. Currently leading payment systems and process improvement initiatives at Cooperative Bank of Oromia.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/Kebron-CV.pdf"
              download
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 sm:w-auto"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 sm:w-auto"
            >
              Contact
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-brand">
                <Briefcase className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Current Role</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-800">Card Banking Officer</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-brand">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
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
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-panel">
            <div className="absolute inset-x-0 top-0 h-24 bg-brand/10" />
            <Image
              src="/kebron-profile.jpg"
              alt="Professional headshot of Kebron Kebede Olana"
              width={520}
              height={520}
              className="relative mx-auto h-auto w-full p-8"
              priority
            />
            <div className="border-t border-slate-200 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Professional Summary</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Executive portfolio highlighting banking operations, business analysis, system enhancement, and stakeholder leadership.
              </p>
              <div className="mt-6 flex items-center gap-3 text-brand">
                <Linkedin className="h-5 w-5" />
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold hover:text-brand-dark"
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
