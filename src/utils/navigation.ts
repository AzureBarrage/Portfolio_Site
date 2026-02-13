import type { SectionId } from '../types/content';

export const normalizeHash = (hash: string): string => hash.replace('#', '').trim().toLowerCase();

export const getSectionFromHash = (hash: string, sectionIds: SectionId[]): SectionId => {
  const normalized = normalizeHash(hash);
  if (sectionIds.includes(normalized as SectionId)) {
    return normalized as SectionId;
  }

  return 'home';
};

export const scrollToSection = (sectionId: string, smooth = true): void => {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
};
