'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-white/5 bg-surface-darker/80 backdrop-blur-glass dark:bg-surface-darker/80 dark:border-white/5"
    >
      <div className="section-container flex items-center justify-between py-5">
        <Link 
          href="#top" 
          className="text-lg font-semibold tracking-tight text-brand hover:text-brand-light transition duration-300"
        >
          Kebron
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-brand transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
