"use client";

import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import { FiGithub, FiCoffee } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  return (
  <div className="md:hidden font-bold">
    <nav className={`bg-transparent p-6 mt-3`}>
      <Link
        href="https://github.com/soundwanders"
        target="_blank"
        className="text-base text-gray-800 dark:text-gray-300 font-bold mr-6"
      >
        <span className="github-logo inline-block mr-2">
          <FiGithub size={24} />
        </span>
        Github
      </Link>

      <Link
        href="https://yamabiko.vercel.app"
        target="_blank"
        className="text-base text-gray-800 dark:text-gray-300 text-lg font-bold"
      >
        <span className="blog-logo inline-block mr-2 -mb-1">
          <FiCoffee size={24} />
        </span>
        Blog
      </Link>

      <span className="inline-block ml-6">
        <ThemeSwitcher />
      </span>
    </nav>
  </div>
  );
};

export default Sidebar;