import type { PropsWithChildren } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle, children }: PropsWithChildren<SectionTitleProps>) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand">Executive Portfolio</p>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-text-primary">{title}</h2>
      {subtitle ? <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl">{subtitle}</p> : null}
      {children}
    </div>
  );
}
