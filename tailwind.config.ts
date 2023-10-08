import type { Config } from 'tailwindcss'

const config: Config = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { 
        salmon: { 
          300: "#fdc4b5",
          400: "#faa78b"
        },
      },
    },
  },
  plugins: [],
};

export default config;
