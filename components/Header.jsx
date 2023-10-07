"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link.js';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import { getThemePreference, setThemePreference } from '../utils/theme.js';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(getThemePreference());

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle theme function
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setThemePreference(newMode);
  };

  useEffect(() => {
    const themePreference = getThemePreference();
    setIsDarkMode(themePreference);
  }, []);

  return (
    <header className="bg-rose-800 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/" className="text-white dark:text-gray-300 p-4">
            Home
          </Link>
        </div>

        {/* Hamburger Icon (only visible on mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-200 focus:outline-none dark:text-gray-300"
          >
            {isSidebarOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Theme Toggle Button */}
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-gray-200 focus:outline-none dark:text-gray-300"
          >
            {isDarkMode ? <IoIosMoon /> : <IoIosSunny />}
          </button>
        </div>

        {/* Navbar Links (visible on desktop) */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/404" className="text-white dark:text-gray-300">
            404
          </Link>
          <Link href="/blog" className="text-white dark:text-gray-300">
            Blog
          </Link>
        </nav>
      </div>

      {/* Sidebar (visible on mobile) */}
      {isSidebarOpen && (
        <div className="md:hidden">
          <nav className={`bg-rose-800 dark:bg-gray-800 p-4`}>
            <Link
              href="/"
              className={`text-white dark:text-gray-300 block py-2 hover:bg-blue-800`}
            >
              Home
            </Link>
            <Link
              href="/404"
              className={`text-white dark:text-gray-300 block py-2 hover:bg-blue-700`}
            >
              404
            </Link>
            <Link
              href="/blog"
              className={`text-white dark:text-gray-300 block py-2 hover:bg-blue-700`}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;