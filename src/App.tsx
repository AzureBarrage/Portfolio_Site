import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import Navbar from './layouts/Navbar';
import Home from './sections/Home';
import { siteConfig } from './content/site';
import type { SectionId } from './types/content';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useTheme } from './hooks/useTheme';
import { getSectionFromHash, scrollToSection } from './utils/navigation';
import { ensureSeoDefaults } from './utils/seo';

const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Work = lazy(() => import('./sections/Work'));
const Contact = lazy(() => import('./sections/Contact'));

const App = () => {
  const sectionIds = useMemo(() => siteConfig.navigation.map((item) => item.id), []);
  const prefersReducedMotion = useReducedMotion();
  const { resolvedTheme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionId>(() => {
    if (typeof window === 'undefined') {
      return 'home';
    }

    return getSectionFromHash(window.location.hash, sectionIds);
  });

  useEffect(() => {
    ensureSeoDefaults();

    const onHashChange = () => {
      const section = getSectionFromHash(window.location.hash, sectionIds);
      setActiveSection(section);
      scrollToSection(section, !prefersReducedMotion);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [prefersReducedMotion, sectionIds]);

  useEffect(() => {
    const section = getSectionFromHash(window.location.hash, sectionIds);
    window.requestAnimationFrame(() => {
      scrollToSection(section, !prefersReducedMotion);
    });
  }, [prefersReducedMotion, sectionIds]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target.id) {
          return;
        }

        const nextSection = visible.target.id as SectionId;
        setActiveSection(nextSection);
        window.history.replaceState(null, '', `/#${nextSection}`);
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0.1, 0.4, 0.7],
      },
    );

    sectionIds.forEach((id) => {
      const target = document.getElementById(id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const currentMeta = siteConfig.sectionMeta[activeSection];
    document.title = `${currentMeta.title} | ${siteConfig.person.name}`;

    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) {
        element.content = content;
      }
    };

    updateMeta('meta[name="description"]', currentMeta.description);
    updateMeta('meta[property="og:title"]', document.title);
    updateMeta('meta[property="og:description"]', currentMeta.description);
    updateMeta('meta[name="twitter:title"]', document.title);
    updateMeta('meta[name="twitter:description"]', currentMeta.description);
  }, [activeSection]);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    window.history.pushState(null, '', `/#${sectionId}`);
    scrollToSection(sectionId, !prefersReducedMotion);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: siteConfig.person.name,
        email: siteConfig.person.email,
        jobTitle: siteConfig.person.role,
        url: siteConfig.seo.siteUrl,
        sameAs: siteConfig.socialLinks
          .map((item) => item.href)
          .filter((href) => href.startsWith('http')),
      },
      {
        '@type': 'WebSite',
        name: siteConfig.seo.defaultTitle,
        url: siteConfig.seo.siteUrl,
        description: siteConfig.seo.defaultDescription,
      },
    ],
  };

  return (
    <div className='relative overflow-x-clip'>
      <script type='application/ld+json'>{JSON.stringify(structuredData)}</script>
      <a
        href='#home'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-md focus:bg-pink-600 focus:px-3 focus:py-2 focus:text-white'
      >
        Skip to content
      </a>
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onToggleTheme={toggleTheme}
        theme={resolvedTheme}
      />
      <main className='pt-20'>
        <Home onNavigate={handleNavigate} reduceMotion={prefersReducedMotion} />
        <Suspense
          fallback={
            <div className='mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500'>
              Loading sections…
            </div>
          }
        >
          <About />
          <Skills />
          <Work />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
