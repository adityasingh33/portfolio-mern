import React from 'react';
import Layout from './components/Layout';
import Meta from './components/Meta';

// Placeholder sections - you can replace these with actual components
function HomeSection() {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container-custom">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Aditya Singh</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | B.Tech Computer Science
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
          Passionate about building scalable web applications with modern technologies.
          MERN stack enthusiast exploring the endless possibilities of web development.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          I'm a B.Tech student in Computer Science and a passionate tech enthusiast.
          I love exploring web development, competitive programming, and emerging technologies.
        </p>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Projects will be displayed here...
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Contact form will be displayed here...
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Meta />
      <Layout>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </>
  );
}



