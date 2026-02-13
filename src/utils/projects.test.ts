import { describe, expect, it } from 'vitest';
import { workData } from '../data/work';
import { filterProjects, getProjectTags } from './projects';

describe('project filtering', () => {
  it('returns all projects when query and tag are empty', () => {
    const result = filterProjects(workData, { query: '', tag: 'All' });
    expect(result).toHaveLength(workData.length);
  });

  it('filters by tag', () => {
    const result = filterProjects(workData, { query: '', tag: 'Hackathon' });
    expect(result.every((project) => project.tags.includes('Hackathon'))).toBe(true);
  });

  it('filters by search query', () => {
    const result = filterProjects(workData, { query: 'sudoku', tag: 'All' });
    expect(result.some((project) => project.slug === 'sudoku-solver')).toBe(true);
  });
});

describe('project tags', () => {
  it('returns sorted tags with All prepended', () => {
    const tags = getProjectTags(workData);
    expect(tags[0]).toBe('All');
    expect(tags).toContain('Frontend');
    expect(tags).toContain('Backend');
  });
});
