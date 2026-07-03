import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B2D5B',
          dark: '#081f44',
          gold: '#C8A14D',
          light: '#F4F6F9',
        },
      },
      boxShadow: {
        panel: '0 18px 55px rgba(11, 45, 91, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(200,161,77,0.14), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f4f6f9 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
