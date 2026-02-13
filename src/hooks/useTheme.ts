import { useEffect, useMemo, useState } from 'react';

type ThemePreference = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme-preference';

const getSystemPreference = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const readStoredPreference = (): ThemePreference => {
  if (typeof window === 'undefined') {
    return 'system';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }

  return 'system';
};

export const useTheme = () => {
  const [preference, setPreference] = useState<ThemePreference>(() => readStoredPreference());
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => getSystemPreference());

  const resolvedTheme = useMemo<'light' | 'dark'>(
    () => (preference === 'system' ? systemTheme : preference),
    [preference, systemTheme],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [resolvedTheme]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, preference);
  }, [preference]);

  const toggleTheme = () => {
    setPreference((current) => {
      const currentResolved = current === 'system' ? getSystemPreference() : current;
      return currentResolved === 'dark' ? 'light' : 'dark';
    });
  };

  return {
    preference,
    resolvedTheme,
    setPreference,
    toggleTheme,
  };
};
