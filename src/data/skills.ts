import {
  Atom,
  Code2,
  Database,
  Cpu,
  Globe,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
  Wrench,
  Settings,
  Cloud,
} from 'lucide-react';

export type SkillCategory = {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    icon: any;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Modern UI engineering for responsive, high-quality user experiences.',
    items: [
      { name: 'React', description: 'Component-driven interfaces and interactive UIs.', icon: Globe },
      { name: 'JavaScript', description: 'Dynamic frontend logic and browser behavior.', icon: Code2 },
      { name: 'TypeScript', description: 'Reliable typed application development.', icon: Wrench },
      { name: 'HTML', description: 'Semantic structure and accessible markup.', icon: Code2 },
      { name: 'CSS', description: 'Cohesive styling systems and responsive layouts.', icon: Sparkles },
      { name: 'Tailwind CSS', description: 'Fast, consistent, utility-first design.', icon: Atom },
    ],
  },
  {
    title: 'Mobile',
    description: 'Cross-platform mobile experiences with strong user-focused design.',
    items: [
      { name: 'React Native', description: 'Reusable mobile experiences for iOS and Android.', icon: Smartphone },
    ],
  },
  {
    title: 'Desktop',
    description: 'Native-like desktop experiences built for productivity and workflow.',
    items: [
      { name: 'Electron.js', description: 'Desktop app experiences using web technologies.', icon: MonitorSmartphone },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Practical backend engineering, data access, and API integration.',
    items: [
      { name: 'Node.js', description: 'Server-side application development and tooling.', icon: Cpu },
      { name: 'REST APIs', description: 'Reliable integrations and data flows between services.', icon: Database },
      { name: 'GraphQL', description: 'Flexible APIs that let clients request exactly the data they need.', icon: Database },
      { name: 'API Integration', description: 'Connecting interfaces to real-world systems and services.', icon: Wrench },
    ],
  },
  {
    title: 'AI / ML',
    description: 'Exploring AI-enhanced experiences and intelligent product workflows.',
    items: [
      { name: 'AI', description: 'Using AI to improve interaction and product value.', icon: Sparkles },
      { name: 'Machine Learning', description: 'Understanding model-driven features and data patterns.', icon: Cpu },
    ],
  },

  {
  title: 'DevOps & Cloud Deployment',

  description: 'Building reliable deployment workflows and managing applications across cloud environments.',

  items: [

    { name: 'DevOps',description: 'Automating development, testing, deployment, and application delivery workflows.', icon: Settings },

    { name: 'Cloud Deployment', description: 'Deploying and managing scalable applications across cloud and hosting platforms.', icon: Cloud 
    },

  ],
},
];
