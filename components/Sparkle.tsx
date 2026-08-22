"use client";

import React from 'react';

// The little mark at the end of the subtitle. It reads as a footnote asterisk
// more than as decoration, which is the point: the line it follows is a caveat,
// and a caveat wants a footnote mark. Drawn inline rather than shipped as a PNG
// (the old cookie) so it inherits `currentColor` and works in both themes.
const Sparkle: React.FC = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="11"
      height="11"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 1.5c.4 5.2 1.9 8.6 4.6 10.5-2.7 1.9-4.2 5.3-4.6 10.5-.4-5.2-1.9-8.6-4.6-10.5C10.1 10.1 11.6 6.7 12 1.5Z" />
      <path d="M22.5 12c-5.2.4-8.6 1.9-10.5 4.6-1.9-2.7-5.3-4.2-10.5-4.6 5.2-.4 8.6-1.9 10.5-4.6C13.9 10.1 17.3 11.6 22.5 12Z" />
    </svg>
  );
};

export default Sparkle;
