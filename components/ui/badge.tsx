type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand/10 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
      {label}
    </span>
  );
}
