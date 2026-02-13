import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-offset-2';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-pink-600 text-white hover:bg-pink-500 focus-visible:ring-pink-500 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950',
  ghost:
    'text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-400 focus-visible:ring-offset-slate-50 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950',
};

const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(baseStyles, variantStyles[variant], fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
