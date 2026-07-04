'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import type { CertificationEntry, CertificationTrack, CertificationSingle } from '../data/certifications';
import { certifications } from '../data/certifications';

// ─── Platform logo SVGs ───────────────────────────────────────────────────────

function CourseraLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Coursera" role="img">
      <rect width="40" height="40" rx="10" fill="#0056D2" />
      <circle cx="20" cy="20" r="11" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="20" cy="20" r="4" fill="white" />
    </svg>
  );
}

function UdemyLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Udemy" role="img">
      <rect width="40" height="40" rx="10" fill="#A435F0" />
      <text x="10" y="27" fontSize="20" fontWeight="900" fill="white" fontFamily="Georgia, serif">u</text>
    </svg>
  );
}

function AlisonLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Alison" role="img">
      <rect width="40" height="40" rx="10" fill="#00A651" />
      <text x="6" y="27" fontSize="13" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">ALI</text>
    </svg>
  );
}

function MicLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="MIC" role="img">
      <rect width="40" height="40" rx="10" fill="#0F172A" />
      <rect x="1" y="1" width="38" height="38" rx="9" stroke="#00D9FF" strokeWidth="1.5" fill="none" />
      <text x="5" y="26" fontSize="11" fontWeight="bold" fill="#00D9FF" fontFamily="Arial, sans-serif">MIC</text>
    </svg>
  );
}

function PlatformLogo({ logo, size }: { logo: CertificationEntry['issuerLogo']; size?: number }) {
  switch (logo) {
    case 'coursera': return <CourseraLogo size={size} />;
    case 'udemy':    return <UdemyLogo size={size} />;
    case 'alison':   return <AlisonLogo size={size} />;
    case 'mic':      return <MicLogo size={size} />;
  }
}

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
  }),
};

// ─── Skill tag ────────────────────────────────────────────────────────────────

function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded border border-white/8 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-text-secondary">
      {label}
    </span>
  );
}

// ─── Google PM Track card ─────────────────────────────────────────────────────

function TrackCard({ entry, index }: { entry: CertificationTrack; index: number }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="glass-card rounded-2xl border border-brand/20 overflow-hidden col-span-full hover:border-brand/40 transition-colors duration-300"
    >
      {/* ── Track header ── */}
      <div className="flex items-start gap-4 p-6">
        <PlatformLogo logo={entry.issuerLogo} size={44} />

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/8 border border-brand/20 rounded-md px-2 py-0.5">
              {entry.platform ?? entry.issuer}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-accent-emerald bg-accent-emerald/8 border border-accent-emerald/20 rounded-md px-2 py-0.5">
              <CheckCircle2 className="h-2.5 w-2.5" />
              Completed
            </span>
            <span className="text-[10px] text-text-muted border border-white/8 rounded-md px-2 py-0.5">
              {entry.courses.length} courses
            </span>
          </div>
          <h4 className="font-display text-base font-bold text-text-primary leading-snug">
            {entry.program}
          </h4>
          <p className="mt-0.5 text-xs text-text-muted">{entry.issuer}</p>
        </div>

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? 'Collapse courses' : 'Expand courses'}
          className="flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-text-muted hover:border-brand/30 hover:text-brand transition-all duration-200 self-start"
        >
          {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          {expanded ? 'Collapse' : 'Show all'}
        </button>
      </div>

      {/* ── Course rows ── */}
      {expanded && (
        <div className="border-t border-white/8 divide-y divide-white/5">
          {entry.courses.map((course, i) => {
            const hasLink = !!course.credentialUrl;
            const Row = hasLink ? 'a' : 'div';
            const linkProps = hasLink
              ? { href: course.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <Row
                key={course.title}
                {...(linkProps as object)}
                className={`flex items-start gap-4 px-6 py-4 transition-colors duration-150 group/row ${
                  hasLink
                    ? 'hover:bg-brand/5 cursor-pointer'
                    : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Step number */}
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/8 text-[10px] font-bold text-brand mt-0.5 flex-shrink-0">
                  {i + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold leading-snug transition-colors duration-150 ${
                    hasLink ? 'text-text-primary group-hover/row:text-brand' : 'text-text-primary'
                  }`}>
                    {course.title}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="text-xs text-text-muted">Issued {course.issued}</span>
                    {course.skills.map((s) => <SkillTag key={s} label={s} />)}
                  </div>
                </div>

                <div className="flex flex-shrink-0 items-center gap-2 self-center ml-2">
                  {hasLink ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-brand opacity-0 group-hover/row:opacity-100 transition-opacity duration-150">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </span>
                  ) : (
                    <CheckCircle2 className="h-4 w-4 text-accent-emerald" />
                  )}
                </div>
              </Row>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

// ─── Single cert card ─────────────────────────────────────────────────────────

function SingleCard({ entry, index }: { entry: CertificationSingle; index: number }) {
  const isInProgress = entry.status === 'in-progress';
  const hasLink = !!entry.credentialUrl;

  // Wrap in <a> if there's a link, otherwise plain <div>
  const Card = hasLink ? 'a' : 'div';
  const linkProps = hasLink
    ? { href: entry.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Card
        {...(linkProps as object)}
        className={`glass-card rounded-2xl border flex flex-col gap-4 p-5 h-full transition-all duration-300 group/card ${
          isInProgress
            ? 'border-brand/20 hover:border-brand/40 hover:-translate-y-0.5'
            : hasLink
            ? 'border-white/8 hover:border-brand/30 hover:bg-brand/[0.03] hover:-translate-y-1 cursor-pointer'
            : 'border-white/8 hover:border-white/15 hover:-translate-y-0.5'
        }`}
      >
        {/* Top: logo + status badge */}
        <div className="flex items-start justify-between gap-3">
          <PlatformLogo logo={entry.issuerLogo} size={40} />
          <span
            className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider flex-shrink-0 ${
              isInProgress
                ? 'border-brand/20 bg-brand/8 text-brand'
                : 'border-accent-violet/20 bg-accent-violet/10 text-accent-violet'
            }`}
          >
            {isInProgress
              ? <><Clock className="h-2.5 w-2.5" /> In Progress</>
              : <><CheckCircle2 className="h-2.5 w-2.5" /> Completed</>
            }
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          <p className={`text-sm font-bold leading-snug transition-colors duration-200 ${
            hasLink ? 'text-text-primary group-hover/card:text-brand' : 'text-text-primary'
          }`}>
            {entry.title}
          </p>
          <p className="text-xs font-medium text-text-secondary">{entry.issuer}</p>

          {entry.issued && (
            <p className="text-xs text-text-muted pt-0.5">
              {isInProgress ? 'Enrolled:' : 'Issued:'} {entry.issued}
            </p>
          )}

          {entry.credentialId && (
            <p className="text-xs text-text-muted">
              Credential ID:{' '}
              <span className="font-medium text-text-secondary">{entry.credentialId}</span>
            </p>
          )}

          {entry.skills && entry.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {entry.skills.map((s) => <SkillTag key={s} label={s} />)}
            </div>
          )}
        </div>

        {/* Footer: credential link label (only when link exists) */}
        {hasLink && (
          <div className="flex items-center gap-1.5 text-xs font-bold text-brand group-hover/card:text-brand-light transition-colors duration-200 pt-1 border-t border-white/8">
            <ExternalLink className="h-3.5 w-3.5" />
            Show credential
          </div>
        )}
      </Card>
    </motion.div>
  );
}

// ─── Section export ───────────────────────────────────────────────────────────

export function CertificationsSection() {
  const track = certifications.find((c): c is CertificationTrack => c.kind === 'track');
  const singles = certifications.filter((c): c is CertificationSingle => c.kind === 'single');

  return (
    <div className="mt-16">
      {/* Sub-heading */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-violet/15">
          <Award className="h-5 w-5 text-accent-violet" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-violet">
            Licenses &amp; Certifications
          </p>
          <h3 className="font-display text-xl font-bold text-text-primary">Professional Credentials</h3>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Google PM track — spans full width */}
        {track && <TrackCard entry={track} index={0} />}

        {/* Individual cert cards */}
        {singles.map((entry, idx) => (
          <SingleCard key={entry.id} entry={entry} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}
