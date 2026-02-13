export type SectionId = 'home' | 'about' | 'skills' | 'work' | 'contact';

export interface SectionMeta {
  title: string;
  description: string;
}

export interface SiteConfig {
  person: {
    name: string;
    role: string;
    tagline: string;
    email: string;
    location: string;
    shortBio: string;
    longBio: string[];
  };
  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    ogImage: string;
    twitterHandle: string;
  };
  navigation: Array<{
    id: SectionId;
    label: string;
  }>;
  socialLinks: Array<{
    label: string;
    href: string;
  }>;
  cta: {
    primary: string;
    secondary: string;
    scheduleUrl: string;
    viewResumeLabel: string;
  };
  sectionMeta: Record<SectionId, SectionMeta>;
}

export interface Skill {
  id: string;
  name: string;
  image: string;
  proficiency: 'Advanced' | 'Proficient' | 'Working';
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  role: string;
  techStack: string[];
  tags: string[];
  highlights: string[];
  problem: string;
  solution: string;
  improvements: string[];
  featured: boolean;
  screenshots: ProjectScreenshot[];
  liveLink?: string;
  repoLink: string;
}
