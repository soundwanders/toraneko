"use client";

import React, { useState } from 'react';
import Link from 'next/link.js';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BiGhost } from 'react-icons/bi';
import Sidebar from './Sidebar';
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-gray-200 dark:bg-slate-875 p-4">
      <div className="container-xl mx-auto flex justify-between items-center px-6 md:px-24">
        <div className="text-gray-700 dark:text-gray-100 font-bold py-1">
          <Link href="/" className="hover:opacity-90">
            <BiGhost size={24} />
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
            className="text-gray-800 dark:text-gray-100 focus:outline-none"
            aria-describedby="Hamburger button that toggles the sidebar"
            aria-label="toggle sidebar"
          >
            {isSidebarOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={18} />}
          </button>
        </div>
      </div>
      {/* Sidebar (visible on mobile) */}
      {isSidebarOpen && (
        <Sidebar />
      )}
    </header>
  );
};

export default Header;