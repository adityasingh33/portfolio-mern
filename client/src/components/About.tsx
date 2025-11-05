import React from 'react';
import Skills from './Skills';

export default function About() {
  return (
    <section
      id="about"
      className="section bg-white dark:bg-gray-900"
      aria-label="About section"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Image Placeholder */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="relative">
              <div className="aspect-square w-full max-w-sm mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-800">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bold text-white">
                    AS
                  </span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                Summary
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am passionate about competitive programming and full stack web development,
                with a proven ability to collaborate effectively within teams. I have demonstrated
                expertise in developing robust web applications and solving complex algorithmic
                challenges. Committed to continuous learning, I apply innovative solutions to
                enhance project outcomes and achieve successful results.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="space-y-2">
                  <div className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400">
                    Aug 2023 - May 2027
                  </div>
                  <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    Bachelor of Technology
                  </div>
                  <div className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                    B. P. Poddar Institute of Management & Technology, Kolkata
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievement - CodeChef */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                Key Achievement
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      CodeChef Global Rank
                    </div>
                    <div className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                      Achieved Global Rank of <span className="font-bold text-blue-600 dark:text-blue-400">706</span> in CodeChef Starters 167{' '}
                      <span className="text-gray-500 dark:text-gray-400">
                        (out of 20,000+ participants)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                Skills
              </h3>
              <Skills compact={false} showCompetitiveProgramming={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

