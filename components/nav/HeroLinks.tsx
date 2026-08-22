"use client";

import { FiGithub, FiCoffee } from 'react-icons/fi';

export const HeroLinks: React.FC = () => {
  return (
    <nav className="flex space-x-4 items-center font-medium text-base mt-6 md:mt-4 md:px-1">
      {/* A warmed panel on the cream ground measures 1.085:1 against it, which is to say
          invisible — so on light it needs an edge to read as a control at all. Indigo at
          35% lands at 1.73:1, a defined border rather than an outline; at full saturation
          it measures 4:1 and looks like a toy at 1px. The loud version belongs in hover,
          where it earns the volume by answering the pointer.

          Indigo rather than salmon for two reasons. Salmon tops out at 2.82:1 even opaque
          (it is nearly as light as the cream, so it has no edge to give), and indigo is
          already the interaction colour here — the focus rings use it. Keeping the accent
          on controls only is what stops it becoming decoration: passive surfaces take the
          warm neutral hairline instead. */}
      <a
        href="https://github.com/soundwanders"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-cream-100 hover:bg-cream-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-indigo-600/35 hover:border-indigo-600/90 dark:border-transparent text-slate-700 dark:text-slate-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
      >
        <span className="group-hover:rotate-12 transition-transform duration-200">
          <FiGithub size={18} />
        </span>
        <span>Github</span>
      </a>

      {/* <a
        href="https://yamabiko.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30 dark:hover:from-indigo-800/40 dark:hover:to-purple-800/40 text-indigo-700 dark:text-indigo-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
      >
        <span className="group-hover:rotate-12 transition-transform duration-200">
          <FiCoffee size={18} />
        </span>
        <span>Blog</span>
      </a> */}
    </nav>
  );
};

export default HeroLinks;