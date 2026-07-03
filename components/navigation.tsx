'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-darker/90 backdrop-blur-nav border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-surface-darker/60 backdrop-blur-nav border-b border-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="#top"
            className="group flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 border border-brand/20 text-brand font-display text-sm font-bold group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-300">
              K
            </span>
            <span className="font-display text-base font-bold text-text-primary group-hover:text-brand transition-colors duration-300">
              Kebron
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-brand'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-brand" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile trigger */}
          <div className="flex items-center gap-3">
            <a
              href="/Kebron-CV.pdf"
              download
              className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-brand/10 border border-brand/25 px-4 py-2 text-sm font-semibold text-brand hover:bg-brand hover:text-surface-darker hover:border-brand hover:shadow-glow transition-all duration-300"
            >
              Download CV
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-text-secondary hover:text-brand hover:border-brand/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute top-16 inset-x-0 bg-surface-darker/98 backdrop-blur-nav border-b border-white/10 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-brand hover:bg-brand/5 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/Kebron-CV.pdf"
                download
                className="mt-2 flex items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-bold text-surface-darker hover:bg-brand-light transition-all duration-200"
              >
                Download CV
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
