"use client";

import React, { useState } from 'react';
import Link from 'next/link.js';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BiGhost } from 'react-icons/bi';
import Sidebar from './Sidebar';
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGhostAnimating, setIsGhostAnimating] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleGhostClick = (e: React.MouseEvent) => {
    // Prevent navigation for the animation
    e.preventDefault();
    
    // Trigger animation
    setIsGhostAnimating(true);
    
    // Reset animation state and navigate after animation
    setTimeout(() => {
      setIsGhostAnimating(false);
    }, 600);
  };

  return (
    <header className="bg-gray-200 dark:bg-slate-875 p-4">
      <div className="container-xl mx-auto flex justify-between items-center px-6 md:px-24">
        <div className="font-bold py-1">
          <Link 
            href="/" 
            className="ghost-container inline-block relative group outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200 dark:focus-visible:ring-offset-slate-875 rounded-lg p-1"
            onClick={handleGhostClick}
            aria-label="Home - Click for a spooky surprise!"
            style={{ border: 'none', outline: 'none' }}
          >
            <div className={`ghost-icon transition-all duration-300 ${isGhostAnimating ? 'ghost-dance' : ''}`}>
              <BiGhost 
                size={24} 
                className="relative z-10 text-indigo-500 dark:text-indigo-400 transition-all duration-300 group-hover:scale-110 group-active:scale-95" 
              />
              
              {/* Click sparkle effects */}
              {isGhostAnimating && (
                <>
                  <div className="sparkle sparkle-1 absolute top-0 left-0 w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <div className="sparkle sparkle-2 absolute top-0 right-0 w-1 h-1 bg-pink-400 rounded-full"></div>
                  <div className="sparkle sparkle-3 absolute bottom-0 left-0 w-1 h-1 bg-blue-400 rounded-full"></div>
                  <div className="sparkle sparkle-4 absolute bottom-0 right-0 w-1 h-1 bg-purple-400 rounded-full"></div>
                </>
              )}
            </div>
            <span className="sr-only">Home</span>
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
            className="text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-200 dark:focus:ring-offset-slate-875 rounded p-1"
            aria-describedby="Hamburger button toggles the sidebar visibility"
            aria-label="toggle sidebar"
          >
            {isSidebarOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={18} />}
            {isSidebarOpen ? <span className="sr-only">Close</span> : <span className="sr-only">Open</span> }
          </button>
        </div>
      </div>
      {/* Sidebar (visible on mobile) */}
      {isSidebarOpen && (
        <Sidebar />
      )}
      
      {/* CSS for animations */}
      <style jsx>{`
        /* OPTION 1: Ghost Dance (Current) */
        .ghost-dance {
          animation: ghostDance 0.6s ease-in-out;
        }
        
        @keyframes ghostDance {
          0% { transform: rotate(0deg) scale(1); }
          15% { transform: rotate(-5deg) scale(1.1); }
          30% { transform: rotate(5deg) scale(1.2); }
          45% { transform: rotate(-3deg) scale(1.1); }
          60% { transform: rotate(3deg) scale(1.15); }
          75% { transform: rotate(-1deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }

        /* OPTION 2: Ghost Float (Alternative - uncomment to use) */
        /*
        .ghost-dance {
          animation: ghostFloat 0.8s ease-in-out;
        }
        
        @keyframes ghostFloat {
          0% { transform: translateY(0px) scale(1); }
          20% { transform: translateY(-8px) scale(1.1); }
          40% { transform: translateY(-15px) scale(1.15) rotateZ(2deg); }
          60% { transform: translateY(-12px) scale(1.1) rotateZ(-1deg); }
          80% { transform: translateY(-5px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
        */

        /* OPTION 3: Ghost Bounce (Alternative - uncomment to use) */
        /*
        .ghost-dance {
          animation: ghostBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes ghostBounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.3) rotateZ(-5deg); }
          60% { transform: scale(0.9) rotateZ(5deg); }
          100% { transform: scale(1) rotateZ(0deg); }
        }
        */
        
        .sparkle {
          animation: sparkleFloat 0.6s ease-out;
        }
        
        .sparkle-1 {
          animation-delay: 0.1s;
        }
        
        .sparkle-2 {
          animation-delay: 0.2s;
        }
        
        .sparkle-3 {
          animation-delay: 0.3s;
        }
        
        .sparkle-4 {
          animation-delay: 0.4s;
        }
        
        @keyframes sparkleFloat {
          0% {
            opacity: 0;
            transform: scale(0) translate(0, 0);
          }
          50% {
            opacity: 1;
            transform: scale(1) translate(var(--float-x, 10px), var(--float-y, -10px));
          }
          100% {
            opacity: 0;
            transform: scale(0) translate(var(--float-x, 20px), var(--float-y, -20px));
          }
        }
        
        .sparkle-1 {
          --float-x: -15px;
          --float-y: -15px;
        }
        
        .sparkle-2 {
          --float-x: 15px;
          --float-y: -15px;
        }
        
        .sparkle-3 {
          --float-x: -15px;
          --float-y: 15px;
        }
        
        .sparkle-4 {
          --float-x: 15px;
          --float-y: 15px;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .ghost-dance,
          .sparkle {
            animation: none !important;
          }
          
          .ghost-container .ghost-icon {
            transform: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;