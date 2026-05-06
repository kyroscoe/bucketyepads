import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#2b2b31',
          blue: '#4b4b54',
          red: '#c7342e',
          orange: '#a82622',
          gray: '#f3f1f1',
          slate: '#18181b',
          silver: '#d8d7db',
        },
      },
      boxShadow: {
        card: '0 10px 30px rgba(16, 32, 51, 0.08)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(216,215,219,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(216,215,219,0.16) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
