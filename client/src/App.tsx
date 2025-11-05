import React from 'react';
import Layout from './components/Layout';
import Meta from './components/Meta';
import Hero from './components/Hero';

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
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </>
  );
}



