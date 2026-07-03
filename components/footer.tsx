'use client';

import Link from 'next/link';
import { socials } from '../data/socials';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-surface-darker">
      {/* Top glow line */}
      <div className="glow-line" />

      <div className="section-container py-12">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
          {/* Brand */}
          <div>
            <Link href="#top" className="inline-flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 text-brand font-display text-sm font-bold">
                K
              </span>
              <span className="font-display text-base font-bold text-text-primary group-hover:text-brand transition-colors duration-300">
                Kebron Kebede Olana
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              Banking Operations Specialist & Project Manager Candidate based in Addis Ababa, Ethiopia.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              {socials.map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-text-muted hover:text-brand transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-muted hover:text-brand transition-colors duration-200 text-right"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Kebron Kebede Olana. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
