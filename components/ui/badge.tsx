type BadgeProps = {
  label: string;
  variant?: 'brand' | 'violet' | 'emerald' | 'default';
};

const variantStyles = {
  brand: 'border-brand/20 bg-brand/10 text-brand',
  violet: 'border-accent-violet/20 bg-accent-violet/10 text-accent-violet',
  emerald: 'border-accent-emerald/20 bg-accent-emerald/10 text-accent-emerald',
  default: 'border-white/10 bg-white/5 text-text-secondary',
};

export function Badge({ label, variant = 'brand' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border px-3 py-1 text-xs font-bold uppercase tracking-widest ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
