"use client";

const Title: React.FC = () => {
  return (
    <h1 className="text-4xl md:text-8xl font-bold mt-2 lg:mt-0 mb-4 whitespace-nowrap">
      <span className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
        sound
      </span>
      <span className="bg-gradient-to-r from-salmon-600 via-salmon-500 to-red-500 dark:from-splinePink-400 dark:via-salmon-300 dark:to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
        wanders
      </span>
    </h1>
  );
};

export default Title;