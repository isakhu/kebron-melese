import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
}> & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-surface-darker shadow-glow hover:bg-brand-light hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'border border-brand/25 bg-brand/8 text-brand hover:border-brand/50 hover:bg-brand/15 hover:shadow-glow-sm disabled:opacity-50 disabled:cursor-not-allowed',
  ghost:
    'text-brand hover:text-brand-light disabled:opacity-50 disabled:cursor-not-allowed',
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-darker ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
