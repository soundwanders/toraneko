"use client";

import Link from "next/link";
import { FiGithub, FiCoffee } from 'react-icons/fi';

export const HeroLinks: React.FC = () => {
  return (
    <nav className="flex space-x-6 items-center font-bold text-lg text-slate-800 dark:text-gray-300 mt-4 md:px-1"> 
      <Link 
        href="https://github.com/soundwanders" 
        target="_blank" 
        className="hero-link mr-4 hover:underline" 
      >
        <span className="github-logo inline-block mr-2">
          <FiGithub size={24} />
        </span>
        Github
      </Link>

      <Link 
        href="https://yamabiko.vercel.app" 
        target="_blank" 
        className="hero-link hover:underline"
      >
        <span className="blog-logo inline-block mr-2 -mb-1">
          <FiCoffee size={24} />
        </span>
        Blog
      </Link>
    </nav>
  );
};

export default HeroLinks;