'use client';

import Link from 'next/link';
import { socials } from '../data/socials';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Kebron Kebede Olana. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 text-sm text-brand">
          {socials.map((item) => (
            <Link key={item.label} href={item.url} target="_blank" rel="noreferrer" className="hover:text-brand-dark">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
