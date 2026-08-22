import type { Config } from 'tailwindcss'

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { 
        // Warm neutral ramp for light mode. A single hue (~92deg) at low chroma, so the
        // page ground and every panel on it stay in one family -- the failure mode of a
        // cream redesign is warm paper with cool grey panels left sitting on top of it.
        cream: {
          50:  "#faf8f0",  // brightest surface: theme-switch knob
          100: "#f7f3e7",  // raised control (link chips)
          200: "#efead9",  // page ground
          300: "#e7e1ce",  // header bar
          400: "#ddd7c2",  // hairlines, hover
        },
        salmon: { 
          300: "#fdc4b5",
          400: "#faa78b",
          500: "#f37a7d",
          600: "#f16366"
        },
        splinePink: {
          400: "#f3a8ba"
        },
        slate: {
          850: "#1c2c50",
          875: "#15223d"
        }
      },
    },
  },
  plugins: [],
};

export default config;
