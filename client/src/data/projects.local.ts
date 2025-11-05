// Local fallback data for projects (used before server is deployed)
export interface Project {
  _id?: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
  createdAt: string;
}

export const localProjects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A fully functional E-Commerce website with both client and customer ends using MERN stack. Features include user authentication, product management, shopping cart, payment processing, and order management.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack', 'JavaScript'],
    githubLink: 'https://github.com/adityasingh33/E-Commerce-Website',
    createdAt: '2024-01-15T00:00:00.000Z',
  },
  {
    title: 'Dialectiq',
    description:
      'A Debate app for enhancing debating skills using AI. Users can debate privately or in groups using chat. Features AI-powered debate assistance and real-time group discussions.',
    techStack: ['JavaScript', 'React', 'Node.js', 'AI/ML', 'WebSocket', 'Chat'],
    githubLink: 'https://github.com/adityasingh33/Dialectiq',
    createdAt: '2024-03-20T00:00:00.000Z',
  },
];

