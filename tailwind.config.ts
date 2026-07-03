import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00D9FF',
          light: '#33E5FF',
          dark: '#00A8CC',
        },
        accent: {
          purple: '#9D4EDD',
          emerald: '#10B981',
          violet: '#7C3AED',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#0F172A',
          darker: '#020617',
          card: '#1E293B',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 41, 55, 0.1)',
        'card': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-accent': '0 0 25px rgba(157, 78, 221, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%), radial-gradient(circle at top right, rgba(0, 217, 255, 0.1), transparent 50%)',
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 217, 255, 0.3)' },
          '50%': { 'box-shadow': '0 0 30px rgba(0, 217, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
