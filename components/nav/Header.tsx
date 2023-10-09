"use client";

import React, { useState } from 'react';
import Link from 'next/link.js';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { FiGithub, FiCoffee } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-gray-700 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/" className="text-white dark:text-gray-300 p-4">
            Home
          </Link>
        </div>


        {/* Theme Switcher Button */}
        <nav className="hidden md:flex space-x-6 items-center font-bold"> 
          <ThemeSwitcher />
        </nav>

        {/* Hamburger Icon (only visible on mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-200 focus:outline-none dark:text-gray-300"
          >
            {isSidebarOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>
      {/* Sidebar (visible on mobile) */}
      {isSidebarOpen && (
        <div className="md:hidden font-bold">
          <nav className={`bg-gray-700 dark:bg-gray-800 p-6`}>
            <Link 
              href="https://github.com/soundwanders" 
              target="_blank" 
              className="text-white dark:text-gray-300 text-lg font-bold mr-6"
            >
              <span className="github-logo inline-block mr-2">
                <FiGithub size={24} />
              </span>
              Github
            </Link>

            <Link 
              href="https://yamabiko.vercel.app" 
              target="_blank" 
              className="text-white dark:text-gray-300 text-lg font-bold"
            >
              <span className="blog-logo inline-block mr-2 -mb-1">
                <FiCoffee size={24} />
              </span>
              Blog
            </Link>

            <span className="inline-block ml-6">
              <ThemeSwitcher/>
            </span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;