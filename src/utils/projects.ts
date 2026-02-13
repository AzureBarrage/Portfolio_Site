import type { Project } from '../types/content';

export interface ProjectFilters {
  query: string;
  tag: string;
}

export const filterProjects = (projects: Project[], filters: ProjectFilters): Project[] => {
  const normalizedQuery = filters.query.trim().toLowerCase();
  const normalizedTag = filters.tag.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesTag =
      normalizedTag.length === 0 ||
      normalizedTag === 'all' ||
      project.tags.some((tag) => tag.toLowerCase() === normalizedTag);

    if (!matchesTag) {
      return false;
    }

    if (normalizedQuery.length === 0) {
      return true;
    }

    const haystack = [
      project.title,
      project.shortDesc,
      project.longDesc,
      project.role,
      ...project.tags,
      ...project.techStack,
      ...project.highlights,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
};

export const getProjectTags = (projects: Project[]): string[] => {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });

  return ['All', ...Array.from(tags).sort((a, b) => a.localeCompare(b))];
};
