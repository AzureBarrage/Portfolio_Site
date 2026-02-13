import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../utils/cn';

interface CardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

const Card = ({ children, className, interactive = false, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'surface rounded-2xl p-5',
        interactive &&
          'transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
