export type Project = {
  title: string;
  slug: string;
  category: 'Web' | 'Mobile' | 'Desktop' | 'Backend' | 'AI / ML';
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  myRole: string;
  status: string;
  github?: string;
  live?: string;
  image?: string;
  architecture?: string[];
};

export const projects: Project[] = [
  {
    title: 'Medicure',
    slug: 'medicure',
    category: 'Web',
    description: 'A healthcare-focused web product designed to improve access to medical information and streamlined patient support workflows.',
    problem: 'Healthcare information and appointment flow often feel fragmented and difficult to navigate for users.',
    solution: 'A clean product experience that brings together patient-oriented information, service access, and an easier digital experience.',
    technologies: ['Node js', 'JavaScript', 'CSS', 'Handlesbars' , 'Mysql'],
    features: ['Responsive layout', 'Healthcare UI flows', 'Service-oriented presentation'],
    myRole: 'Frontend product implementation and user experience refinement.',
    status: 'College project',
    github: 'https://github.com/Vivek10sharma/Medicure_user',
    image: '/logo.jpg',
    architecture: ['User', 'node js', 'Handlebars', 'Healthcare data service'],
  },
  {
    title: 'Portfolio Platform',
    slug: 'portfolio-platform',
    category: 'Web',
    description: 'A polished personal portfolio experience crafted to communicate technical capability, product thinking, and personal brand.',
    problem: 'A strong digital identity is essential for engineers seeking opportunities and client work.',
    solution: 'A modular, content-driven portfolio with modern visual design and interactive storytelling.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    features: ['Responsive sections', 'Smooth navigation', 'Project storytelling'],
    myRole: 'Design, structure, and implementation of the portfolio experience.',
    status: 'Personal project',
    github: '#',
    live: '#',
    image: './logo.jpg',
    architecture: ['User', 'Portfolio frontend', 'Content layer', 'Presentation'],
  },
  {
    title: 'CareerLink',
    slug: 'careerlink',
    category: 'Web',
    description: 'A full-stack career platform connecting job seekers, recruiters, and administrators through a unified application workflow.',
    problem: 'Career and hiring platforms often split important workflows across disconnected systems, making role management and user experiences harder to manage.',
    solution: 'A complete product ecosystem with frontend, admin dashboard, and backend services to support recruitment and candidate lifecycle management.',
    technologies: ['React', 'Node.js', 'Express', 'REST APIs', 'MongoDB', 'JavaScript'],
    features: ['User-facing career portal', 'Admin dashboard', 'Backend APIs', 'Role-driven workflows'],
    myRole: 'Full-stack contribution across the frontend, admin, and backend implementation.',
    status: 'Full project',
    github: 'https://github.com/Vivek10sharma/CareerLink_backend',
    live: '#',
    image: './logo.jpg',
    architecture: ['User', 'Frontend app', 'Admin panel', 'Backend services', 'Database'],
  },
];
