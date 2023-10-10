"use client";

import React, { useState } from 'react';
import Link from 'next/link.js';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Sidebar from './Sidebar';
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-gray-200 dark:bg-slate-875 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-700 dark:text-gray-100 font-bold text-lg">
          <Link href="/" className="p-4 hover:opacity-90 ">
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
            className="text-gray-800 dark:text-gray-100 focus:outline-none"
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