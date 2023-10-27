"use client";

import ThemeSwitcher from "../ThemeSwitcher";
import { FiGithub, FiCoffee } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
  <div className="md:hidden font-bold">
    <nav className={`bg-transparent p-6 mt-3`}>
      <a
        className="text-base text-gray-800 dark:text-gray-300 font-bold mr-6"
        href="https://github.com/soundwanders"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="github-logo inline-block mr-2">
          <FiGithub size={24} />
        </span>
        Github
      </a>

      <a
        className="text-base text-gray-800 dark:text-gray-300 font-bold mr-6"
        href="https://jcoletta.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="blog-logo inline-block mr-2 -mb-1">
          <FiCoffee size={24} />
        </span>
        Blog
      </a>

      <span className="inline-block ml-6">
        <ThemeSwitcher />
      </span>
    </nav>
  </div>
  );
};

export default Sidebar;
