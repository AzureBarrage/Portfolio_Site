import type { PropsWithChildren } from 'react';
import { cn } from '../utils/cn';

interface TagProps extends PropsWithChildren {
  className?: string;
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
