"use client";

import CookieIcon from "../CookieIcon";

const Subtitle: React.FC = () => {
  return (
    <div className="mb-8">
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 md:px-1 leading-relaxed">
        Navigating the digital dreamscape, where
        
        <span className="relative inline-block">
          <span className="text-salmon-600 dark:text-salmon-300 font-semibold"> 
            &nbsp;pixels paint stories
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-salmon-600/60 to-transparent dark:from-salmon-300/60 rounded"></span>
        </span>
        
        &nbsp;<br/>and there's

        <span className="relative inline-block">
          <span className="text-indigo-500 dark:text-indigo-200 font-semibold">
            &nbsp;artistry in every byte
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/60 to-transparent dark:from-indigo-200/60 rounded"></span>
        </span>

        <span className="text-sm px-2 inline-block hover:rotate-12 transition-transform duration-300">
          <CookieIcon />
        </span>
      </p>
    </div>
  );
};

export default Subtitle;