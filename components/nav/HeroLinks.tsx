"use client";

import { FiGithub, FiCoffee } from 'react-icons/fi';

export const HeroLinks: React.FC = () => {
  return (
    <nav className="flex space-x-4 items-center font-medium text-base mt-6 md:mt-4 md:px-1"> 
      <a
        href="https://github.com/soundwanders"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
      >
        <span className="group-hover:rotate-12 transition-transform duration-200">
          <FiGithub size={18} />
        </span>
        <span>Github</span>
      </a>

      <a
        href="https://yamabiko.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30 dark:hover:from-indigo-800/40 dark:hover:to-purple-800/40 text-indigo-700 dark:text-indigo-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
      >
        <span className="group-hover:rotate-12 transition-transform duration-200">
          <FiCoffee size={18} />
        </span>
        <span>Blog</span>
      </a>
    </nav>
  );
};

export default HeroLinks;