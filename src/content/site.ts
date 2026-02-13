import type { SiteConfig } from '../types/content';

export const siteConfig: SiteConfig = {
  person: {
    name: 'Julian MacLeod',
    role: 'Full Stack Developer',
    tagline: 'I build thoughtful software experiences from backend systems to polished UIs.',
    email: 'julian.macleod96@gmail.com',
    location: 'United States',
    shortBio:
      'I help startups and teams ship reliable web products with strong UX, performance, and maintainable architecture.',
    longBio: [
      'I am passionate about building software that is practical, intuitive, and genuinely useful in daily life. My work spans both front-end and back-end projects—from REST API design to responsive web applications.',
      'I collaborate with both individual clients and businesses, tailoring implementation to project goals, timelines, and long-term maintainability.',
    ],
  },
  seo: {
    siteUrl: 'https://jpmacleod.netlify.app',
    defaultTitle: 'Julian MacLeod | Full Stack Developer',
    defaultDescription:
      'Portfolio of Julian MacLeod — full stack developer focused on modern frontend UX, robust backend systems, and high-quality product delivery.',
    keywords: [
      'Julian MacLeod',
      'Full Stack Developer',
      'Frontend Engineer',
      'React',
      'TypeScript',
      'Portfolio',
    ],
    ogImage: '/workImg.jpeg',
    twitterHandle: '@julianmacleod',
  },
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/AzureBarrage' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jmacleod96/' },
    { label: 'Email', href: 'mailto:julian.macleod96@gmail.com' },
  ],
  cta: {
    primary: 'View Work',
    secondary: "Let's Collaborate",
    scheduleUrl: 'https://calendly.com/your-handle/intro-chat',
    viewResumeLabel: 'View Resume',
  },
  sectionMeta: {
    home: {
      title: 'Home',
      description:
        'Portfolio landing page for Julian MacLeod, full stack developer crafting high-quality digital experiences.',
    },
    about: {
      title: 'About',
      description:
        'Background, values, and approach to building maintainable software with practical outcomes.',
    },
    skills: {
      title: 'Skills',
      description:
        'Core technical stack across frontend, backend, cloud tooling, and product-minded engineering practices.',
    },
    work: {
      title: 'Work',
      description:
        'Selected projects, case-study details, technologies used, and real-world product outcomes.',
    },
    contact: {
      title: 'Contact',
      description:
        'Reach out for collaboration, consulting, and product development opportunities.',
    },
  },
};
