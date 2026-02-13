import { describe, expect, it } from 'vitest';
import { getSectionFromHash, normalizeHash } from './navigation';

describe('navigation utilities', () => {
  it('normalizes hash values', () => {
    expect(normalizeHash('#Work')).toBe('work');
    expect(normalizeHash(' #contact ')).toBe('contact');
  });

  it('returns matching section from hash', () => {
    expect(getSectionFromHash('#skills', ['home', 'skills', 'work', 'contact', 'about'])).toBe(
      'skills',
    );
  });

  it('falls back to home for unknown hash', () => {
    expect(getSectionFromHash('#missing', ['home', 'about', 'skills', 'work', 'contact'])).toBe(
      'home',
    );
  });
});
