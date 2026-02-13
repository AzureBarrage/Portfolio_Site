import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Button from '../components/Button';
import Container from '../components/Container';
import { siteConfig } from '../content/site';
import type { SectionId } from '../types/content';
import { trackEvent } from '../utils/analytics';

interface HomeProps {
  onNavigate: (sectionId: SectionId) => void;
  reduceMotion: boolean;
}

const Home = ({ onNavigate, reduceMotion }: HomeProps) => {
  const transition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 0.45,
      };

  return (
    <section
      id='home'
      aria-label='Home'
      className='relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden py-20'
    >
      <div className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-pink-100/60 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950' />
      <Container className='flex flex-col justify-center'>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className='text-base font-semibold uppercase tracking-[0.2em] text-pink-500 sm:text-lg'
        >
          Hello, my name is
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
          className='mt-3 text-4xl font-bold text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-100'
        >
          {siteConfig.person.name}
        </motion.h1>
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.16 }}
          className='mt-2 text-3xl font-bold text-slate-600 sm:text-5xl dark:text-slate-300'
        >
          {siteConfig.person.role}
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.24 }}
          className='mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300'
        >
          {siteConfig.person.shortBio}
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.3 }}
          className='mt-8 flex flex-wrap items-center gap-3'
        >
          <Button
            type='button'
            onClick={() => {
              trackEvent('hero_primary_cta', { section: 'home' });
              onNavigate('work');
            }}
            className='group'
          >
            {siteConfig.cta.primary}
            <span className='transition-transform duration-300 group-hover:translate-x-1'>
              <HiArrowNarrowRight className='ml-2' aria-hidden='true' />
            </span>
          </Button>
          <Button
            type='button'
            variant='secondary'
            onClick={() => {
              trackEvent('hero_secondary_cta', { section: 'home' });
              onNavigate('contact');
            }}
          >
            {siteConfig.cta.secondary}
          </Button>
          <a
            href={siteConfig.cta.scheduleUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800'
            onClick={() => trackEvent('hero_schedule_click')}
          >
            Schedule a chat
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Home;
