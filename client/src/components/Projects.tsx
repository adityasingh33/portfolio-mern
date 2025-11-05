import React, { useState, useEffect } from 'react';
import { localProjects, Project } from '../data/projects.local';

interface ProjectsResponse {
  success: boolean;
  count: number;
  data: Project[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch from API
        const response = await fetch('http://localhost:4000/api/projects');

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data: ProjectsResponse = await response.json();

        if (data.success && data.data) {
          setProjects(data.data);
        } else {
          // Fallback to local data
          setProjects(localProjects);
        }
      } catch (err) {
        // Fallback to local data if API fails
        console.warn('API fetch failed, using local fallback:', err);
        setProjects(localProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="section bg-gray-50 dark:bg-gray-800 py-20 md:py-24"
      aria-label="Projects section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No projects found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project._id || index} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract key features from description (first 3 sentences or bullet points)
  const getKeyFeatures = (description: string): string[] => {
    // Split by periods and take first 3 meaningful sentences
    const sentences = description
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 20)
      .slice(0, 3);

    return sentences.map((s) => {
      // Remove common prefixes like "Features include", "A fully functional", etc.
      return s
        .replace(/^(Features include|A fully functional|Users can|Features|Built with)/i, '')
        .trim();
    });
  };

  const keyFeatures = getKeyFeatures(project.description);

  return (
    <article
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`
          relative h-full p-6 md:p-8 rounded-2xl
          bg-white/80 dark:bg-gray-900/80
          backdrop-blur-lg backdrop-saturate-150
          border border-white/20 dark:border-gray-700/50
          shadow-lg hover:shadow-2xl
          transition-all duration-500 ease-out
          transform-gpu
          ${isHovered ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'}
          hover:border-blue-400/50 dark:hover:border-blue-500/50
        `}
        style={{
          transform: isHovered
            ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.02)'
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        }}
      >
        {/* Glassmorphism overlay effect */}
        <div
          className={`
            absolute inset-0 rounded-2xl
            bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          `}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Key Features Bullets */}
          {keyFeatures.length > 0 && (
            <div className="mb-4 space-y-2">
              {keyFeatures.slice(0, 3).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <svg
                    className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 focus-ring group/link"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg
                className="w-5 h-5 group-hover/link:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-all duration-200 focus-ring group/link"
                aria-label={`View live demo of ${project.title}`}
              >
                <svg
                  className="w-5 h-5 group-hover/link:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Reveal animation overlay */}
        <div
          className={`
            absolute inset-0 rounded-2xl
            bg-gradient-to-br from-blue-600/20 to-indigo-600/20
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
            mix-blend-overlay
          `}
        />
      </div>
    </article>
  );
}

function ProjectCardSkeleton() {
  return (
    <div className="relative h-full p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-lg animate-pulse">
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>

      {/* Features skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>

      {/* Tags skeleton */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-14"></div>
      </div>

      {/* Buttons skeleton */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
      </div>
    </div>
  );
}

