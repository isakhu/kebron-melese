import type { PropsWithChildren } from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  accent?: string;
  centered?: boolean;
};

export function SectionTitle({ title, subtitle, accent, centered, children }: PropsWithChildren<SectionTitleProps>) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {accent && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          <span className="h-px w-6 bg-brand inline-block" />
          {accent}
          <span className="h-px w-6 bg-brand inline-block" />
        </p>
      )}
      <h2 className="font-display text-section font-bold text-text-primary">
        {title}
        <span className="text-brand">.</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed text-text-secondary ${centered ? 'mx-auto max-w-xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
