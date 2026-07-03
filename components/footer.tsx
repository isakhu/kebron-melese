'use client';

import Link from 'next/link';
import { socials } from '../data/socials';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-darker/50 backdrop-blur-glass py-12">
      <div className="section-container flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-secondary">© {new Date().getFullYear()} Kebron Kebede Olana. All rights reserved.</p>
        <div className="flex flex-wrap gap-6 text-sm">
          {socials.map((item) => (
            <Link key={item.label} href={item.url} target="_blank" rel="noreferrer" className="text-brand hover:text-brand-light transition duration-300 font-medium">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
