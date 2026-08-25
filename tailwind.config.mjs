/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0e17',
        'navy-bg': '#0a0e17',
        'navy-surface': '#0f1420',
        'navy-card': '#131929',
        'navy-card-hover': '#182136',
        'navy-border': '#1e293b',
        'navy-border-light': '#334155',
        goblue: {
          50: '#f0faff',
          100: '#e0f4fe',
          200: '#bae8fd',
          300: '#7dd2fc',
          400: '#38bdf8',
          500: '#00ADD8', // Official Go Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          accent: '#00ADD8',
          electric: '#00e5ff',
          deep: '#007d9c',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 173, 216, 0.25)',
        'glow-md': '0 0 30px -5px rgba(0, 173, 216, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(0, 173, 216, 0.45)',
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.35)',
        'terminal': '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 173, 216, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
