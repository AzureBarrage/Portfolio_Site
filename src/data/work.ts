import type { Project } from '../types/content';
import backgroundImage from '../assets/blank-background.png';
import biasCheckerBackground from '../assets/project-bg-bias-checker.svg';
import cbtPlatformBackground from '../assets/project-bg-cbt-platform.svg';
import cognitiveSimBackground from '../assets/project-bg-cognitive-sim.svg';
import sentimentAppBackground from '../assets/project-bg-sentiment-app.svg';
import workVerification from '../assets/work-update-verification.png';

export const workData: Project[] = [
  {
    id: 'cognitive-sim',
    slug: 'cognitive-sim',
    title: 'Cognitive_Sim',
    shortDesc: 'Behavioral simulation platform for modeling agent decisions over changing inputs.',
    longDesc:
      'Built an interactive behavioral simulation system that models agent states, response thresholds, and environmental stimuli to evaluate how cognitive rules influence decisions over time.',
    role: 'ML Engineer, Full Stack Developer',
    techStack: ['Python', 'Behavioral Modeling', 'Simulation Design', 'Data Visualization'],
    tags: ['AI/ML', 'Behavioral', 'Simulation'],
    highlights: [
      'Designed configurable state-transition logic for repeatable scenario testing',
      'Added decision-trace views to inspect why outcomes changed across simulation runs',
      'Implemented experiment presets for faster behavioral parameter comparison',
    ],
    problem:
      'Behavior modeling experiments were difficult to compare because run setup and decision logic were not consistently represented.',
    solution:
      'Created a simulation workflow with standardized scenario inputs, tracked decision traces, and visualization layers for direct run-to-run analysis.',
    improvements: [
      'Add reinforcement-learning strategy adapters for adaptive agents',
      'Export simulation traces to benchmark datasets for reproducibility',
    ],
    featured: true,
    screenshots: [
      {
        src: cognitiveSimBackground,
        alt: 'Abstract neural network themed background for Cognitive_Sim behavioral project',
        width: 1600,
        height: 900,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage',
  },
  {
    id: 'cbt-platform',
    slug: 'cbt-platform',
    title: 'CBT Platform',
    shortDesc:
      'Real-world cognitive behavioral therapy platform for session workflows and progress tracking.',
    longDesc:
      'Developed a CBT-focused web platform that supports structured therapeutic sessions, guided prompts, journaling flows, and measurable progress tracking for practical clinical use.',
    role: 'Product Engineer, Frontend + Backend Developer',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Product Design'],
    tags: ['HealthTech', 'Real-world', 'Full Stack'],
    highlights: [
      'Implemented guided session templates aligned with CBT methodology',
      'Built secure user progress timelines and therapist-facing summary views',
      'Shipped modular flows for thought records, behavior activation, and follow-up tasks',
    ],
    problem:
      'Existing therapy workflows were fragmented across documents and apps, reducing consistency and visibility into patient progress.',
    solution:
      'Unified session planning, exercises, and outcomes into one platform with structured flows and longitudinal insights.',
    improvements: [
      'Integrate PHQ-9/GAD-7 assessment trend analytics',
      'Add role-based multi-clinic collaboration and audit trails',
    ],
    featured: true,
    screenshots: [
      {
        src: cbtPlatformBackground,
        alt: 'Dashboard-style background for CBT platform case study',
        width: 1600,
        height: 900,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage',
  },
  {
    id: 'sentiment-app',
    slug: 'sentiment-app',
    title: 'Sentiment App',
    shortDesc:
      'Data-oriented sentiment analysis app for scoring, trend exploration, and reporting.',
    longDesc:
      'Created a sentiment analytics application that ingests text data, applies sentiment classification pipelines, and surfaces actionable trends through a visual dashboard.',
    role: 'Data Engineer, Full Stack Developer',
    techStack: ['Python', 'NLP', 'Data Pipelines', 'React', 'Visualization'],
    tags: ['Data', 'NLP', 'Analytics'],
    highlights: [
      'Built preprocessing and scoring pipeline for short and long-form text',
      'Added confidence-aware positive/neutral/negative distribution breakdowns',
      'Implemented trend charts for time-based sentiment shifts',
    ],
    problem:
      'Stakeholders needed quick visibility into opinion trends but raw text volume made manual review impractical.',
    solution:
      'Automated text classification and delivered summarized sentiment metrics with clear visual comparisons over time.',
    improvements: [
      'Add topic extraction to pair themes with sentiment movement',
      'Enable stream processing for near real-time monitoring',
    ],
    featured: true,
    screenshots: [
      {
        src: sentimentAppBackground,
        alt: 'Chart-focused background for sentiment analytics application',
        width: 1600,
        height: 900,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage',
  },
  {
    id: 'bias-checker',
    slug: 'bias-checker',
    title: 'Bias Checker',
    shortDesc:
      'Analytical tool for detecting potential bias patterns in user-generated and model-generated text.',
    longDesc:
      'Engineered a bias analysis tool that evaluates text for representation and framing signals, then surfaces explainable indicators to support review and mitigation workflows.',
    role: 'AI Engineer, Applied NLP Developer',
    techStack: ['Python', 'NLP', 'Text Analysis', 'Explainability', 'React'],
    tags: ['Analysis', 'AI/ML', 'Responsible AI'],
    highlights: [
      'Created rule-plus-model scoring layers for interpretable bias detection',
      'Added phrase-level rationale panels to increase reviewer trust',
      'Designed category-based reports for comparative fairness analysis',
    ],
    problem:
      'Teams needed a practical way to spot and communicate potential textual bias before publishing or deploying content.',
    solution:
      'Delivered a review workflow with explainable signals, category summaries, and exportable analysis reports.',
    improvements: [
      'Expand multilingual bias lexicons and cultural context rules',
      'Add calibration tools for domain-specific sensitivity tuning',
    ],
    featured: true,
    screenshots: [
      {
        src: biasCheckerBackground,
        alt: 'Analytical dashboard-style background for bias checker project',
        width: 1600,
        height: 900,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage',
  },
  {
    id: 'portfolio-site',
    slug: 'portfolio-site',
    title: 'Portfolio Website',
    shortDesc: 'A modernized portfolio built with React, TypeScript, and Tailwind.',
    longDesc:
      'Designed and implemented a responsive single-page portfolio focused on content clarity, conversion-friendly CTAs, accessibility, and fast loading performance.',
    role: 'Frontend Engineer, UI/UX Designer',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    tags: ['Frontend', 'Portfolio', 'UI/UX'],
    highlights: [
      'Data-driven sections for easier updates',
      'Accessible navigation and semantic layout',
      'Improved project storytelling and interaction patterns',
    ],
    problem:
      'The previous portfolio structure was visually dated and lacked enough context for projects and user action flow.',
    solution:
      'Rebuilt the IA and component system with reusable primitives, better visual hierarchy, richer project data, and high-impact interaction improvements.',
    improvements: [
      'Add route-based case study pages for deeper SEO indexing',
      'Integrate CMS-backed editing workflow for non-technical updates',
    ],
    featured: false,
    screenshots: [
      {
        src: workVerification,
        alt: 'Screenshot of the updated portfolio home section',
        width: 1365,
        height: 767,
      },
      {
        src: backgroundImage,
        alt: 'Portfolio project placeholder visual',
        width: 1200,
        height: 800,
      },
    ],
    liveLink: 'https://jpmacleod.netlify.app',
    repoLink: 'https://github.com/AzureBarrage/Portfolio-Site',
  },
  {
    id: 'sudoku-solver',
    slug: 'sudoku-solver',
    title: 'Sudoku Solver',
    shortDesc: 'Algorithmic solver for sudoku puzzles with deterministic backtracking.',
    longDesc:
      'Implemented a performant sudoku solver that validates inputs, applies constraint propagation, and falls back to backtracking for complex states.',
    role: 'Software Developer',
    techStack: ['Python', 'Algorithms', 'Data Structures'],
    tags: ['Backend', 'Algorithms'],
    highlights: [
      'Constraint validation for fast failure paths',
      'Readable architecture for teaching/demo use',
      'Edge-case handling for invalid boards',
    ],
    problem: 'Manual puzzle solving is slow and error-prone for high-complexity boards.',
    solution:
      'Created an algorithmic solver that quickly resolves valid boards while giving deterministic output and input checks.',
    improvements: [
      'Add browser UI to visualize solving steps',
      'Benchmark solver performance against larger puzzle sets',
    ],
    featured: false,
    screenshots: [
      {
        src: backgroundImage,
        alt: 'Sudoku solver placeholder screenshot',
        width: 1200,
        height: 800,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage/Sudoku-Solver',
  },
  {
    id: 'email-sender',
    slug: 'email-sender',
    title: 'E-mail Sender',
    shortDesc: 'Utility for composing and sending transactional emails programmatically.',
    longDesc:
      'Built a configurable email sender utility that supports templated content and transport provider configuration for fast automation use cases.',
    role: 'Software Developer',
    techStack: ['Python', 'SMTP', 'Automation'],
    tags: ['Automation', 'Backend'],
    highlights: [
      'Template-ready payload model',
      'Simple setup for repeatable automation scripts',
      'Clear error handling around transport failures',
    ],
    problem: 'Repeated manual email workflows consumed time and introduced inconsistency.',
    solution: 'Automated outbound emails with a scriptable workflow and configurable templates.',
    improvements: [
      'Add dashboard for send history and retry queue',
      'Support multiple delivery providers with fallback',
    ],
    featured: false,
    screenshots: [
      {
        src: backgroundImage,
        alt: 'Email sender placeholder screenshot',
        width: 1200,
        height: 800,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage/E-mail_Sender',
  },
  {
    id: 'mealcheck',
    slug: 'mealcheck',
    title: 'MealCheck',
    shortDesc: 'Hackathon app for meal planning insights and usability-first flow.',
    longDesc:
      'Collaboratively built a food planning application during WaffleHacks with a focus on user-friendly interactions and practical nutrition workflows.',
    role: 'Frontend Developer',
    techStack: ['React', 'JavaScript', 'Team Collaboration'],
    tags: ['Hackathon', 'Frontend', 'Product'],
    highlights: [
      'Rapid prototyping under tight timeline constraints',
      'Collaborative feature scoping and prioritization',
      'Accessible component-driven UI implementation',
    ],
    problem: 'Users needed a quick way to organize meals and review planning context.',
    solution:
      'Shipped a streamlined interface for creating and tracking meal plans with minimal friction.',
    improvements: [
      'Integrate nutrition APIs for richer data',
      'Add account sync and saved meal templates',
    ],
    featured: false,
    screenshots: [
      {
        src: backgroundImage,
        alt: 'MealCheck placeholder screenshot',
        width: 1200,
        height: 800,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage/MealCheck_WaffleHacksProject',
  },
  {
    id: 'weatherman',
    slug: 'weatherman',
    title: 'Weatherman',
    shortDesc: 'Weather app providing quick forecasts with location-based data.',
    longDesc:
      'Developed a weather application that consumes forecast APIs and presents current and near-term weather details in a clean, understandable UI.',
    role: 'Frontend Developer',
    techStack: ['React', 'API Integration', 'CSS'],
    tags: ['Frontend', 'API', 'Utilities'],
    highlights: [
      'Integrated external weather API endpoints',
      'Responsive layout across devices',
      'Improved data readability through concise cards',
    ],
    problem: 'Existing weather tools were cluttered and slowed access to core forecast details.',
    solution: 'Built a focused UI that highlights only the most useful forecast information.',
    improvements: [
      'Add severe weather notifications and alerts',
      'Introduce geolocation permission flow improvements',
    ],
    featured: false,
    screenshots: [
      {
        src: backgroundImage,
        alt: 'Weatherman placeholder screenshot',
        width: 1200,
        height: 800,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage/Weather-App',
  },
  {
    id: 'email-rerouter',
    slug: 'email-rerouter',
    title: 'E-mail Rerouter',
    shortDesc: 'Email flow rerouting utility for forwarding and delivery control.',
    longDesc:
      'Created an email rerouting script to simplify administrative forwarding scenarios and improve delivery routing consistency.',
    role: 'Software Developer',
    techStack: ['Python', 'Email Protocols', 'Automation'],
    tags: ['Backend', 'Automation', 'Infrastructure'],
    highlights: [
      'Automated repetitive forwarding tasks',
      'Reduced manual handling errors',
      'Kept configuration lightweight and script-friendly',
    ],
    problem: 'Manual rerouting workflows were repetitive and difficult to scale.',
    solution:
      'Automated routing logic with configurable rules to make forwarding workflows reliable.',
    improvements: [
      'Add a GUI for non-technical setup',
      'Add detailed logs and retry instrumentation',
    ],
    featured: false,
    screenshots: [
      {
        src: backgroundImage,
        alt: 'Email rerouter placeholder screenshot',
        width: 1200,
        height: 800,
      },
    ],
    repoLink: 'https://github.com/AzureBarrage/E-mail_Sender',
  },
];
