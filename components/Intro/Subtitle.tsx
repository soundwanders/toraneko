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
            back from the rest of the line rather than a second bold accent. gray-600
            rather than gray-500 because the cream ground costs about 0.4 of contrast
            and 500 fell to 4.02:1 — under AA for text this size. 600 is still lighter
            than the gray-700 body text, so it stays subordinate, which is the point. */}
        <span className="italic text-gray-800 dark:text-gray-200">
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
