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
          violet: '#7C3AED',
          emerald: '#10B981',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#0F172A',
          darker: '#020617',
          card: '#0F172A',
          elevated: '#1E293B',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#CBD5E1',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'section': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'card': '0 20px 60px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 24px rgba(0, 217, 255, 0.35)',
        'glow-sm': '0 0 16px rgba(0, 217, 255, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.25)',
        'glow-accent': '0 0 25px rgba(124, 58, 237, 0.3)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #020617 0%, #0F172A 50%, #020617 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(0,217,255,0.15) 0%, rgba(124,58,237,0.15) 100%)',
        'section-gradient': 'linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.4) 50%, transparent 100%)',
      },
      backdropBlur: {
        'glass': '12px',
        'nav': '20px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'fade-in': 'fadeIn 0.7s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.45)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
