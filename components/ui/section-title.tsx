import type { PropsWithChildren } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle, children }: PropsWithChildren<SectionTitleProps>) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.28em] text-brand dark:text-brand-light">Executive Portfolio</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p> : null}
      {children}
    </div>
  );
}
