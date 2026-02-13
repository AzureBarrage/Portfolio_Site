import type { PropsWithChildren } from 'react';
import Container from './Container';
import { cn } from '../utils/cn';

interface SectionProps extends PropsWithChildren {
  id: string;
  label: string;
  title?: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
}

const Section = ({
  id,
  label,
  title,
  subtitle,
  className,
  contentClassName,
  children,
}: SectionProps) => {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('py-20 sm:py-24', className)}>
      <Container className={contentClassName}>
        {(title || subtitle) && (
          <header className='mb-10 sm:mb-12'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-pink-500'>
              {label}
            </p>
            {title ? (
              <h2
                id={`${id}-title`}
                className='section-title mt-3 text-slate-900 dark:text-slate-100'
              >
                {title}
              </h2>
            ) : (
              <span id={`${id}-title`} className='sr-only'>
                {label}
              </span>
            )}
            {subtitle ? (
              <p className='mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300'>
                {subtitle}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
