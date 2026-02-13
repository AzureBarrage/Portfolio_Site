import { useEffect, type ReactElement } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';
import { cn } from '../utils/cn';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  title: string;
  message?: string;
  type?: ToastType;
  isOpen: boolean;
  onClose: () => void;
}

const iconByType: Record<ToastType, ReactElement> = {
  success: <FaCheckCircle aria-hidden='true' className='text-emerald-500' size={18} />,
  error: <FaExclamationCircle aria-hidden='true' className='text-rose-500' size={18} />,
  info: <FaInfoCircle aria-hidden='true' className='text-sky-500' size={18} />,
};

const Toast = ({ title, message, type = 'info', isOpen, onClose }: ToastProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onClose();
    }, 3800);

    return () => window.clearTimeout(timeout);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed bottom-4 right-4 z-[70] w-[calc(100%-2rem)] max-w-sm'
      role='status'
      aria-live='polite'
    >
      <div className='surface flex items-start gap-3 p-4'>
        {iconByType[type]}
        <div className='min-w-0 flex-1'>
          <p className='font-semibold text-slate-900 dark:text-slate-100'>{title}</p>
          {message ? (
            <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>{message}</p>
          ) : null}
        </div>
        <button
          type='button'
          onClick={onClose}
          className={cn(
            'rounded-md px-2 py-1 text-xs font-medium text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200',
          )}
          aria-label='Close notification'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Toast;
