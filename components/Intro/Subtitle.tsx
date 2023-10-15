"use client";

import BurgerIcon from "../BurgerIcon";

const Subtitle: React.FC = () => {
  return (
    <>
      <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 md:px-1">
        Navigating the digital dreamscape, where

        <span className="text-salmon-600 dark:text-salmon-300 font-bold"> 
          &nbsp;pixels paint stories
        </span>
        
        &nbsp;<br/>and there's

        <span className="text-indigo-500 dark:text-indigo-200 font-bold">
          &nbsp;artistry in every byte
        </span>

        <span className="text-sm px-2">
          <BurgerIcon />
        </span>
      </p>
    </>
  );
};

export default Subtitle;