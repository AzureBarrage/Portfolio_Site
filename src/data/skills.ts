import type { Skill } from '../types/content';
import CSS from '../assets/css.png';
import Django from '../assets/django.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import Python from '../assets/Python.png';
import ReactImg from '../assets/react.png';

export const skillsData: Skill[] = [
  { id: 'python', name: 'Python', image: Python, proficiency: 'Advanced' },
  { id: 'django', name: 'Django', image: Django, proficiency: 'Proficient' },
  { id: 'html', name: 'HTML', image: HTML, proficiency: 'Advanced' },
  { id: 'css', name: 'CSS', image: CSS, proficiency: 'Advanced' },
  { id: 'javascript', name: 'JavaScript', image: JavaScript, proficiency: 'Advanced' },
  { id: 'mongodb', name: 'MongoDB', image: Mongo, proficiency: 'Proficient' },
  { id: 'react', name: 'React', image: ReactImg, proficiency: 'Advanced' },
  { id: 'nodejs', name: 'Node.js', image: Node, proficiency: 'Proficient' },
];
