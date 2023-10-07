"use client";
import { IconContext } from "react-icons";
import { FiSun, FiMoon } from 'react-icons/fi';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useTheme } from 'next-themes';

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const isActive = theme === "light";

    const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform 
    ${
      isActive ? 'translate-x-0' : 'translate-x-6' 
    } 
    transition-transform duration-500 ease-in-out`;

return (
  <div className="relative w-12 h-6 rounded-full px-1 cursor-pointer bg-slate-600" onClick={toggleTheme}>
    <button className={switchClasses}>
      <IconContext.Provider value={{ color: theme === 'light' ? '#6A5ACD' : '#483D8B', className: "theme-button pl-1" }}>
        {isActive ? <HiOutlineSun size={18} /> : <HiOutlineMoon />}
      </IconContext.Provider>;
    </button>
  </div>
)};

export default ThemeSwitcher;
