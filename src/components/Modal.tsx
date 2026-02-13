import { useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';
import { cn } from '../utils/cn';

interface ModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}

const focusableSelectors =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Modal = ({ isOpen, title, description, onClose, children }: ModalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusables = containerRef.current?.querySelectorAll<HTMLElement>(focusableSelectors);
    focusables?.[0]?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements =
      containerRef.current?.querySelectorAll<HTMLElement>(focusableSelectors);
    if (!focusableElements || focusableElements.length === 0) {
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className='fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-slate-950/70 p-4 sm:items-center'
      role='presentation'
      onClick={onClose}
    >
      <div
        ref={containerRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='project-modal-title'
        aria-describedby={description ? 'project-modal-description' : undefined}
        className={cn('surface w-full max-w-3xl p-5 sm:p-8', 'max-h-[90vh] overflow-y-auto')}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className='mb-6 flex items-start justify-between gap-4'>
          <div>
            <h3
              id='project-modal-title'
              className='text-2xl font-bold text-slate-900 dark:text-slate-100'
            >
              {title}
            </h3>
            {description ? (
              <p
                id='project-modal-description'
                className='mt-2 text-sm text-slate-600 dark:text-slate-300'
              >
                {description}
              </p>
            ) : null}
          </div>
          <button
            type='button'
            className='rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
            onClick={onClose}
            aria-label='Close details'
          >
            <FaTimes size={18} aria-hidden='true' />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
