import React from 'react';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

export default function Resume() {
  return (
    <>
      <Meta title="Resume - Aditya Singh" />
      <Layout>
        <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
          <div className="container-custom max-w-4xl">
            {/* Print and Download Actions */}
            <div className="flex flex-wrap gap-4 mb-8 print:hidden">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors focus-ring"
                aria-label="Print resume"
              >
                Print Resume
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white rounded-lg transition-colors focus-ring inline-flex items-center gap-2"
                aria-label="Download resume PDF"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>

            {/* Resume Content */}
            <article className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 md:p-12 print:shadow-none print:p-0">
              {/* Header */}
              <header className="mb-8 border-b-2 border-gray-200 dark:border-gray-700 pb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  Aditya Singh
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  Full Stack Developer
                </p>
              </header>

              {/* Contact Information */}
              <section className="mb-8" aria-label="Contact Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:adityasinghbharadwaj688@gmail.com"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      adityasinghbharadwaj688@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+916289261252"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +91 6289 261 252
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Kolkata, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      href="https://github.com/adityasingh33"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      github.com/adityasingh33
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <a
                    href="https://leetcode.com/adityasingh33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    LeetCode
                  </a>
                  <a
                    href="https://www.codechef.com/users/adityasingh33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    CodeChef
                  </a>
                  <a
                    href="https://codeforces.com/profile/adityasingh33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Codeforces
                  </a>
                </div>
              </section>

              {/* Summary */}
              <section className="mb-8" aria-label="Summary">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Summary
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am passionate about competitive programming and full stack web development,
                  with a proven ability to collaborate effectively within teams. I have demonstrated
                  expertise in developing robust web applications and solving complex algorithmic
                  challenges. Committed to continuous learning, I apply innovative solutions to
                  enhance project outcomes and achieve successful results.
                </p>
              </section>

              {/* Education */}
              <section className="mb-8" aria-label="Education">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Education
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Bachelor of Technology
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Aug 2023 - May 2027
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      B. P. Poddar Institute of Management & Technology, Kolkata
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Class 12 (CBSE)
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        2021 - 2022
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Hariyana Vidya Mandir, Saltlake (80.4%)
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Class 10 (CBSE)
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        2019 - 2020
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Hariyana Vidya Mandir, Saltlake (80.4%)
                    </p>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-8" aria-label="Projects">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Projects
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Dialectiq - AI-Enhanced Debate Platform
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Apr 2025
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      <a
                        href="https://github.com/adityasingh33/Dialectiq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        github.com/adityasingh33/Dialectiq
                      </a>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                      <li>Developed a full-stack MERN application for real-time debate platform</li>
                      <li>Implemented WebSocket-based real-time communication for group discussions</li>
                      <li>Integrated AI module for moderation, fact-checking, and AI opponent features</li>
                      <li>Built privacy controls and user authentication system</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        E-Commerce Platform (MERN Stack)
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Dec 2024
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      <a
                        href="https://github.com/adityasingh33/E-Commerce-Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        github.com/adityasingh33/E-Commerce-Website
                      </a>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                      <li>Built a fully functional e-commerce platform with client and customer interfaces</li>
                      <li>Implemented comprehensive inventory management system</li>
                      <li>Integrated Cloudinary API for image upload and management</li>
                      <li>Added React Toastify for user notifications and feedback</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Achievements */}
              <section className="mb-8" aria-label="Key Achievements">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Key Achievements
                </h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                    <span>
                      <strong>CodeChef Global Rank:</strong> Achieved Global Rank of{' '}
                      <strong>706</strong> in CodeChef Starters 167 (out of 20,000+ participants)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                    <span>
                      <strong>GNIT TechFest:</strong> Secured 2nd prize in the Technical Quiz
                    </span>
                  </li>
                </ul>
              </section>

              {/* Skills */}
              <section className="mb-8" aria-label="Skills">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Skills
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Languages
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      C/C++, JavaScript, Python, TypeScript
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Frameworks & Stacks
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      MERN Stack (MongoDB, Express.js, React, Node.js), WebSockets
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Developer Tools
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Git, GitHub, VS Code, Postman
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
}

