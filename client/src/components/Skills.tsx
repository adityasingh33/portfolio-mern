import React from 'react';

interface Skill {
  name: string;
  proficiency: number; // 1-5
  category: 'language' | 'framework' | 'tool';
}

const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', proficiency: 5, category: 'language' },
  { name: 'TypeScript', proficiency: 4, category: 'language' },
  { name: 'Python', proficiency: 4, category: 'language' },
  { name: 'C/C++', proficiency: 5, category: 'language' },
  // Frameworks
  { name: 'React', proficiency: 5, category: 'framework' },
  { name: 'Node.js', proficiency: 4, category: 'framework' },
  { name: 'Express.js', proficiency: 4, category: 'framework' },
  { name: 'MongoDB', proficiency: 4, category: 'framework' },
  { name: 'WebSockets', proficiency: 3, category: 'framework' },
  // Tools
  { name: 'Git', proficiency: 5, category: 'tool' },
  { name: 'GitHub', proficiency: 5, category: 'tool' },
  { name: 'VS Code', proficiency: 5, category: 'tool' },
  { name: 'Postman', proficiency: 4, category: 'tool' },
];

interface ProficiencyDotsProps {
  level: number;
}

function ProficiencyDots({ level }: ProficiencyDotsProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full transition-colors ${
            dot <= level
              ? 'bg-blue-600 dark:bg-blue-400'
              : 'bg-gray-300 dark:bg-gray-600'
          }`}
          aria-label={`Proficiency level ${dot <= level ? 'filled' : 'empty'}`}
        />
      ))}
    </div>
  );
}

interface CompetitiveProgrammingWidgetProps {
  compact?: boolean;
}

function CompetitiveProgrammingWidget({ compact = false }: CompetitiveProgrammingWidgetProps) {
  return (
    <div
      className={`
        bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20
        rounded-xl p-4 border border-blue-200 dark:border-blue-800
        ${compact ? 'text-sm' : ''}
      `}
    >
      <div className="flex items-center gap-2 mb-3">
        <svg
          className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
        <h3 className={`font-bold text-gray-900 dark:text-white ${compact ? 'text-base' : 'text-lg'}`}>
          Competitive Programming
        </h3>
      </div>

      {/* CodeChef Rank */}
      <div className="mb-3">
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">CodeChef</div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-blue-600 dark:text-blue-400">Rank #706</span>
          <span className="text-xs text-gray-500 dark:text-gray-500">Starters 167</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-2">
        <a
          href="https://www.codechef.com/users/adityasingh33"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors focus-ring"
          aria-label="View CodeChef profile"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          CodeChef
        </a>
        <a
          href="https://codeforces.com/profile/adityasingh33"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/50 rounded-md hover:bg-orange-200 dark:hover:bg-orange-900 transition-colors focus-ring"
          aria-label="View Codeforces profile"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Codeforces
        </a>
        <a
          href="https://leetcode.com/adityasingh33"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/50 rounded-md hover:bg-yellow-200 dark:hover:bg-yellow-900 transition-colors focus-ring"
          aria-label="View LeetCode profile"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          LeetCode
        </a>
      </div>
    </div>
  );
}

interface SkillsProps {
  compact?: boolean;
  showCompetitiveProgramming?: boolean;
}

export default function Skills({ compact = false, showCompetitiveProgramming = true }: SkillsProps) {
  const languages = skills.filter((s) => s.category === 'language');
  const frameworks = skills.filter((s) => s.category === 'framework');
  const tools = skills.filter((s) => s.category === 'tool');

  return (
    <div className={`space-y-6 ${compact ? 'text-sm' : ''}`}>
      {/* Competitive Programming Widget */}
      {showCompetitiveProgramming && (
        <CompetitiveProgrammingWidget compact={compact} />
      )}

      {/* Languages */}
      <div>
        <h3 className={`font-semibold text-gray-900 dark:text-white mb-3 ${compact ? 'text-base' : 'text-lg'}`}>
          Languages
        </h3>
        <div className="flex flex-wrap gap-3">
          {languages.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.name}</span>
              <ProficiencyDots level={skill.proficiency} />
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <h3 className={`font-semibold text-gray-900 dark:text-white mb-3 ${compact ? 'text-base' : 'text-lg'}`}>
          Frameworks & Stacks
        </h3>
        <div className="flex flex-wrap gap-3">
          {frameworks.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.name}</span>
              <ProficiencyDots level={skill.proficiency} />
            </div>
          ))}
        </div>
      </div>

      {/* Developer Tools */}
      <div>
        <h3 className={`font-semibold text-gray-900 dark:text-white mb-3 ${compact ? 'text-base' : 'text-lg'}`}>
          Developer Tools
        </h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <span className="font-medium text-gray-900 dark:text-white text-sm">{skill.name}</span>
              <ProficiencyDots level={skill.proficiency} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

