import { useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaSearch } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Section from '../components/Section';
import Tag from '../components/Tag';
import { workData } from '../data/work';
import type { Project } from '../types/content';
import { trackEvent } from '../utils/analytics';
import { filterProjects, getProjectTags } from '../utils/projects';

const Work = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectTags = useMemo(() => getProjectTags(workData), []);
  const featuredProjects = useMemo(() => workData.filter((project) => project.featured), []);

  const visibleProjects = useMemo(
    () =>
      filterProjects(workData, {
        query: searchQuery,
        tag: activeTag,
      }),
    [activeTag, searchQuery],
  );

  return (
    <>
      <Section
        id='work'
        label='Work'
        title='Selected projects and case studies'
        subtitle='Filter by project type, search by technology, and open full case-study details.'
      >
        <div className='surface mb-6 p-4'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
            <div className='relative w-full max-w-lg'>
              <FaSearch
                className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400'
                size={14}
                aria-hidden='true'
              />
              <label htmlFor='project-search' className='sr-only'>
                Search projects
              </label>
              <input
                id='project-search'
                type='search'
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className='w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-800 focus:border-pink-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
                placeholder='Search by title, tech stack, or feature…'
              />
            </div>

            <div className='flex flex-wrap gap-2'>
              {projectTags.map((tag) => (
                <button
                  key={tag}
                  type='button'
                  className={
                    activeTag === tag
                      ? 'rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white'
                      : 'rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
                  }
                  onClick={() => {
                    setActiveTag(tag);
                    trackEvent('project_filter', { tag });
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <h3 className='mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100'>
            Featured projects
          </h3>
          <div className='grid gap-4 md:grid-cols-2'>
            {featuredProjects.map((project) => (
              <Card key={project.id} interactive className='flex h-full flex-col'>
                <img
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  className='h-44 w-full rounded-xl object-cover'
                  loading='lazy'
                  width={project.screenshots[0].width}
                  height={project.screenshots[0].height}
                />
                <h4 className='mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {project.title}
                </h4>
                <p className='mt-2 text-sm text-slate-700 dark:text-slate-300'>
                  {project.shortDesc}
                </p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                  ))}
                </div>
                <div className='mt-5'>
                  <Button
                    type='button'
                    onClick={() => {
                      setSelectedProject(project);
                      trackEvent('project_open_details', {
                        slug: project.slug,
                        source: 'featured',
                      });
                    }}
                  >
                    View case study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className='mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100'>
            All projects
          </h3>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {visibleProjects.map((project) => (
              <Card key={project.id} interactive className='flex h-full flex-col'>
                <h4 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {project.title}
                </h4>
                <p className='mt-2 text-sm text-slate-700 dark:text-slate-300'>
                  {project.shortDesc}
                </p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Tag key={`${project.id}-${tech}`}>{tech}</Tag>
                  ))}
                </div>
                <div className='mt-4 flex items-center gap-2'>
                  <Button
                    type='button'
                    variant='secondary'
                    onClick={() => {
                      setSelectedProject(project);
                      trackEvent('project_open_details', { slug: project.slug, source: 'grid' });
                    }}
                  >
                    Details
                  </Button>
                  <a
                    href={project.repoLink}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex rounded-lg p-2 text-slate-700 transition hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800'
                    aria-label={`Open repository for ${project.title}`}
                  >
                    <FaGithub size={16} aria-hidden='true' />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Modal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ''}
        description={selectedProject?.shortDesc}
      >
        {selectedProject ? (
          <div className='space-y-6'>
            <img
              src={selectedProject.screenshots[0].src}
              alt={selectedProject.screenshots[0].alt}
              className='h-56 w-full rounded-xl object-cover sm:h-72'
              loading='lazy'
              width={selectedProject.screenshots[0].width}
              height={selectedProject.screenshots[0].height}
            />

            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <h4 className='text-sm font-semibold uppercase tracking-[0.16em] text-pink-500'>
                  Overview
                </h4>
                <p className='mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300'>
                  {selectedProject.longDesc}
                </p>
              </div>
              <div>
                <h4 className='text-sm font-semibold uppercase tracking-[0.16em] text-pink-500'>
                  Role
                </h4>
                <p className='mt-2 text-sm text-slate-700 dark:text-slate-300'>
                  {selectedProject.role}
                </p>
                <h4 className='mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-pink-500'>
                  Stack
                </h4>
                <div className='mt-2 flex flex-wrap gap-2'>
                  {selectedProject.techStack.map((tech) => (
                    <Tag key={`${selectedProject.id}-stack-${tech}`}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className='text-sm font-semibold uppercase tracking-[0.16em] text-pink-500'>
                Problem and solution
              </h4>
              <p className='mt-2 text-sm text-slate-700 dark:text-slate-300'>
                <strong>Problem:</strong> {selectedProject.problem}
              </p>
              <p className='mt-2 text-sm text-slate-700 dark:text-slate-300'>
                <strong>Solution:</strong> {selectedProject.solution}
              </p>
            </div>

            <div>
              <h4 className='text-sm font-semibold uppercase tracking-[0.16em] text-pink-500'>
                Key features
              </h4>
              <ul className='mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300'>
                {selectedProject.highlights.map((highlight) => (
                  <li key={`${selectedProject.id}-${highlight}`}>• {highlight}</li>
                ))}
              </ul>
            </div>

            <div className='flex flex-wrap items-center gap-3'>
              <a
                href={selectedProject.repoLink}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200'
              >
                <FaGithub size={15} aria-hidden='true' />
                Repository
              </a>
              {selectedProject.liveLink ? (
                <a
                  href={selectedProject.liveLink}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800'
                >
                  <FaExternalLinkAlt size={13} aria-hidden='true' />
                  Live demo
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
};

export default Work;
