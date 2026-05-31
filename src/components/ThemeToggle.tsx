'use client';

import { useEffect, useState } from 'react';

const themeKey = 'theme';

function getStoredTheme() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage.getItem(themeKey);
  } catch {
    return null;
  }
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(nextIsDark: boolean) {
      root.classList.toggle('dark', nextIsDark);
      root.style.colorScheme = nextIsDark ? 'dark' : 'light';
      setIsDark(nextIsDark);
    }

    function syncSystemTheme() {
      if (!getStoredTheme()) {
        applyTheme(mediaQuery.matches);
      }
    }

    setIsDark(root.classList.contains('dark'));
    mediaQuery.addEventListener('change', syncSystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', syncSystemTheme);
    };
  }, []);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains('dark');

    document.documentElement.classList.toggle('dark', nextIsDark);
    document.documentElement.style.colorScheme = nextIsDark ? 'dark' : 'light';

    try {
      window.localStorage.setItem(themeKey, nextIsDark ? 'dark' : 'light');
    } catch {
    }

    setIsDark(nextIsDark);
  }

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="icon-button"
      onClick={toggleTheme}
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 7 9 9 0 1 1-9-7Z" />
        </svg>
      )}
    </button>
  );
}
