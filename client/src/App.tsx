import React from 'react';
import Layout from './components/Layout';
import Meta from './components/Meta';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Meta />
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}



