import type { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { cn } from '../utils/cn';

interface IconLinkProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon: ReactNode;
}

const IconLink = ({ label, icon, className, children, ...props }: IconLinkProps) => {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        className,
      )}
      {...props}
    >
      <span aria-hidden='true'>{icon}</span>
      <span>{children ?? label}</span>
    </a>
  );
};

export default IconLink;
