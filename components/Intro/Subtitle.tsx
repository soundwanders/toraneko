"use client";

import Sparkle from "../Sparkle";

const Subtitle: React.FC = () => {
  return (
    <div className="mb-8">
      {/* One line, one sentence. `md:whitespace-nowrap` holds it together from the
          breakpoint up, where the max-w-xl column has room for all 58 characters at
          text-lg; below that it wraps naturally rather than overflowing the gutter. */}
      <p className="text-base md:text-lg md:whitespace-nowrap text-gray-700 dark:text-gray-300 md:px-1 leading-relaxed">
        Navigating the

        <span className="relative inline-block">
          <span className="text-salmon-600 dark:text-salmon-300 font-semibold">
            &nbsp;digital dreamscape
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-salmon-600/60 to-transparent dark:from-salmon-300/60 rounded"></span>
        </span>

        {/* The caveat is the joke, and the joke lands quieter: italic and a shade
            back from the rest of the line rather than a second bold accent. */}
        <span className="italic text-gray-500 dark:text-gray-400">
          , as circumstances permit.
        </span>

        <span className="inline-block align-baseline pl-1.5 text-salmon-500 dark:text-salmon-300/80 hover:rotate-90 transition-transform duration-500 ease-out">
          <Sparkle />
        </span>
      </p>
    </div>
  );
};

export default Subtitle;
