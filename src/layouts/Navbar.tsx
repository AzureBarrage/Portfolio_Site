import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import resume from '../assets/Julian-MacLeod-Resume.pdf';
import { siteConfig } from '../content/site';
import type { SectionId } from '../types/content';
import IconLink from '../components/IconLink';
import { cn } from '../utils/cn';
import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onToggleTheme: () => void;
  theme: 'light' | 'dark';
}

const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Navbar = ({ activeSection, onNavigate, onToggleTheme, theme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.body.classList.add('menu-open');

    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', keyHandler);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', keyHandler);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const firstFocusable = menuRef.current?.querySelector<HTMLElement>(focusableSelectors);
    firstFocusable?.focus();
  }, [isOpen]);

  const handleNavigate = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setIsOpen(false);
    trackEvent('navigation_click', { section: sectionId });
  };

  const onMenuKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(focusableSelectors);
    if (!focusableElements || focusableElements.length === 0) {
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/85'>
      <div className='mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <a
          href='/#home'
          onClick={(event) => {
            event.preventDefault();
            handleNavigate('home');
          }}
          className='inline-flex items-center gap-3 rounded-lg px-2 py-1'
          aria-label='Go to home section'
        >
          <img src={logo} alt='Julian MacLeod logo' width={42} height={42} className='h-10 w-10' />
          <span className='hidden text-sm font-semibold text-slate-800 dark:text-slate-100 sm:block'>
            Julian MacLeod
          </span>
        </a>

        <nav aria-label='Primary navigation' className='hidden md:block'>
          <ul className='flex items-center gap-1'>
            {siteConfig.navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigate(item.id);
                  }}
                  className={cn(
                    'inline-flex rounded-lg px-3 py-2 text-sm font-medium transition',
                    activeSection === item.id
                      ? 'bg-pink-500/15 text-pink-600 dark:text-pink-400'
                      : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-100',
                  )}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden items-center gap-1 md:flex'>
          <IconLink
            href='https://github.com/AzureBarrage'
            target='_blank'
            rel='noreferrer'
            label='GitHub'
            icon={<FaGithub size={15} />}
          />
          <IconLink
            href='https://www.linkedin.com/in/jmacleod96/'
            target='_blank'
            rel='noreferrer'
            label='LinkedIn'
            icon={<FaLinkedin size={15} />}
          />
          <button
            type='button'
            onClick={onToggleTheme}
            className='rounded-lg p-2 text-slate-700 transition hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800'
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>

        <button
          type='button'
          onClick={() => setIsOpen((current) => !current)}
          className='rounded-lg p-2 text-slate-700 transition hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden'
          aria-label='Toggle navigation menu'
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div
          className='fixed inset-0 z-40 bg-slate-950/60 px-4 pt-24 md:hidden'
          role='presentation'
        >
          <div
            id='mobile-menu'
            ref={menuRef}
            role='dialog'
            aria-modal='true'
            aria-label='Mobile navigation menu'
            onKeyDown={onMenuKeyDown}
            className='surface mx-auto w-full max-w-md p-5'
          >
            <ul className='space-y-2'>
              {siteConfig.navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition',
                      activeSection === item.id
                        ? 'bg-pink-500/15 text-pink-600 dark:text-pink-400'
                        : 'text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800',
                    )}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className='mt-5 flex flex-wrap gap-2 border-t border-slate-200 pt-4 dark:border-slate-700'>
              <IconLink
                href='mailto:julian.macleod96@gmail.com'
                label='Email'
                icon={<HiOutlineMail size={16} />}
              />
              <IconLink
                href={resume}
                target='_blank'
                rel='noreferrer'
                label='Resume'
                icon={<BsFillPersonLinesFill size={16} />}
              />
              <button
                type='button'
                onClick={onToggleTheme}
                className='rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800'
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
