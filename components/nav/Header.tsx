"use client";

import React, { useState } from 'react';
import Link from 'next/link.js';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-rose-800 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/" className="text-white dark:text-gray-300 p-4">
            Home
          </Link>
        </div>


        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-6 items-center"> {/* Change `justify-end` to `items-center` */}
          <Link href="/404" className="text-white dark:text-gray-300">
            404
          </Link>
          <Link href="https://yamabiko.vercel.app" target="_blank" className="text-white dark:text-gray-300">
            Blog
          </Link>
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
        <div className="md:hidden">
          <nav className={`bg-rose-800 dark:bg-gray-800 p-6`}>
            <Link
              href="/"
              className={`text-white dark:text-gray-300 block py-2 hover:bg-blue-800`}
            >
              Home
            </Link>
            <Link
              href="https://yamabiko.vercel.app"
              className={`text-white dark:text-gray-300 block py-2 hover:bg-blue-700`}
            >
              Blog
            </Link>
            <Link
              href="/404"
              className={`text-white dark:text-gray-300 block py-2 hover:bg-blue-700`}
            >
              404
            </Link>
          </nav>
        </div>
      )}
      
    </header>
  )
};

export default Header;