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

  const knobClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white shadow-sm rounded-full transform 
    transition-all duration-500 ease-in-out group-hover:scale-110
    ${isActive ? '-translate-x-1' : 'translate-x-6'}`;

  return (
    // The whole pill is the button, so the full 48x24 area stays clickable and is a single
    // focusable control. Previously the onClick sat on a div wrapping a separate button.
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      aria-pressed={isActive}
      className="group relative w-12 h-6 rounded-full px-1 cursor-pointer bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
    >
      <span className={knobClasses}>
        <IconContext.Provider value={{ 
          color: theme === 'light' ? '#4338ca' : '#6366f1', 
          className: "theme-button transition-all duration-300" 
        }}>
          {isActive ? (
            <HiOutlineSun size={16} className="animate-pulse" />
          ) : (
            <HiOutlineMoon size={16} className="animate-pulse" />
          )}
        </IconContext.Provider>
      </span>
      <span className="sr-only">{isActive ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeSwitcher;
