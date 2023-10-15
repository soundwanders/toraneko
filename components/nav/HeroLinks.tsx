"use client";

import { FiGithub, FiCoffee } from 'react-icons/fi';

export const HeroLinks: React.FC = () => {
  return (
    <nav className="flex space-x-6 items-center font-bold text-base text-slate-800 dark:text-gray-300 mt-6 md:mt-2 md:px-1"> 
      <a
        href="https://github.com/soundwanders"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-link mr-2 hover:underline"
      >
        <span className="github-logo inline-block mr-2">
          <FiGithub size={20} />
        </span>
        Github
      </a>

      <a
        href="https://yamabiko.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-link mr-4 hover:underline"
      >
        <span className="blog-logo inline-block mr-2 -mb-1">
          <FiCoffee size={20} />
        </span>
        Blog
      </a>
    </nav>
  );
};

export default HeroLinks;