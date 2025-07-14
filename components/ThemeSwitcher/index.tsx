"use client";

import { IconContext } from "react-icons";
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useTheme } from 'next-themes';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white shadow-sm rounded-full transform 
    transition-all duration-500 ease-in-out hover:scale-110
    ${isActive ? '-translate-x-1' : 'translate-x-6'}`;

  return (
    <div 
      className="relative w-12 h-6 rounded-full px-1 cursor-pointer bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-md hover:shadow-lg" 
      onClick={toggleTheme}
    >
      <button 
        className={switchClasses}
        aria-label="toggle theme"
        aria-describedby="switch between light and dark theme"
      >
        <IconContext.Provider value={{ 
          color: theme === 'light' ? '#4338ca' : '#6366f1', 
          className: "theme-button transition-all duration-300" 
        }}>
          {isActive ? (
            <HiOutlineSun size={16} className="animate-pulse" />
          ) : (
            <HiOutlineMoon size={16} className="animate-pulse" />
          )}
          {isActive ? (
            <span className="sr-only">Light Mode</span>
          ) : (
            <span className="sr-only">Dark Mode</span>
          )}
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default ThemeSwitcher;