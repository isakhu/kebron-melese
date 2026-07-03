import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
}> & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand/40',
  secondary: 'border border-brand text-brand hover:bg-brand/5 focus-visible:ring-brand/40',
  ghost: 'text-brand hover:text-brand-dark focus-visible:ring-brand/40',
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
