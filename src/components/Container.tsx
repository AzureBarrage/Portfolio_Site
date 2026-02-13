import type { PropsWithChildren } from 'react';
import { cn } from '../utils/cn';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
  );
};

export default Container;
