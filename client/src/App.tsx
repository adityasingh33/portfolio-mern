import React from 'react';
import Layout from './components/Layout';
import Meta from './components/Meta';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

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
        <About />
        <Projects />
        <ContactSection />
      </Layout>
    </>
  );
}



