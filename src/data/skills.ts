import Python from '../assets/Python.png';
import Django from '../assets/django.png'; // Assuming django.png exists and was mapped from node.png in original code? Wait, original code had: import Django from '../assets/node.png'; line 9 of Skills.tsx. Let's keep it consistent or fix it if I can see django.png.
// checking file list: django.png exists. I should use that.
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';

export const skillsData = [
  { id: 1, name: 'PYTHON', image: Python },
  { id: 2, name: 'Django', image: Django },
  { id: 3, name: 'HTML', image: HTML },
  { id: 4, name: 'CSS', image: CSS },
  { id: 5, name: 'JAVASCRIPT', image: JavaScript },
  { id: 6, name: 'MONGO DB', image: Mongo },
  { id: 7, name: 'REACT', image: ReactImg },
  { id: 8, name: 'NODE JS', image: Node },
];
