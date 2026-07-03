import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
}> & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-surface-darker hover:bg-brand-light shadow-glow hover:shadow-glow-accent disabled:opacity-50 disabled:cursor-not-allowed',
  secondary: 'border border-brand text-brand hover:bg-brand/10 focus-visible:ring-brand/40 disabled:opacity-50 disabled:cursor-not-allowed',
  ghost: 'text-brand hover:text-brand-light focus-visible:ring-brand/40 disabled:opacity-50 disabled:cursor-not-allowed',
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-darker focus-visible:ring-brand/40 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
