import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../src/models/Project';
import { connectDB, disconnectDB } from '../src/utils/database';

dotenv.config();

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A fully functional E-Commerce website with both client and customer ends using MERN stack. Features include user authentication, product management, shopping cart, payment processing, and order management.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack', 'JavaScript'],
    githubLink: 'https://github.com/adityasingh33/E-Commerce-Website',
    createdAt: new Date('2024-01-15'),
  },
  {
    title: 'Dialectiq',
    description:
      'A Debate app for enhancing debating skills using AI. Users can debate privately or in groups using chat. Features AI-powered debate assistance and real-time group discussions.',
    techStack: ['JavaScript', 'React', 'Node.js', 'AI/ML', 'WebSocket', 'Chat'],
    githubLink: 'https://github.com/adityasingh33/Dialectiq',
    createdAt: new Date('2024-03-20'),
  },
];

async function seedProjects() {
  try {
    console.log('Connecting to MongoDB...');
    await connectDB();

    console.log('Clearing existing projects...');
    await Project.deleteMany({});

    console.log('Seeding projects...');
    const insertedProjects = await Project.insertMany(projects);

    console.log(`✅ Successfully seeded ${insertedProjects.length} projects:`);
    insertedProjects.forEach((project) => {
      console.log(`  - ${project.title} (${project.githubLink})`);
    });

    await disconnectDB();
    console.log('✅ Seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding projects:', error);
    await disconnectDB();
    process.exit(1);
  }
}

// Run the seed function
seedProjects();

