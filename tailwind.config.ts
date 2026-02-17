import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080c10',
          900: '#0d1117',
          850: '#0f1923',
          800: '#161b22',
          750: '#1a2030',
          700: '#21262d',
          500: '#6e7681',
          300: '#a8b1bc',
          100: '#e6edf3',
        },
        accent: {
          600: '#3b57e8',
          500: '#4f6ef7',
          400: '#7c94fb',
        },
        green: {
          500: '#26a148',
          400: '#3fb950',
        },
        background: '#0d1117',
        surface: '#161b22',
        'surface-2': '#0f1923',
        raised: '#1a2030',
        border: '#21262d',
        'border-subtle': 'rgba(255,255,255,0.06)',
        brand: {
          DEFAULT: '#3b57e8',
          hover: '#4f6ef7',
          light: '#7c94fb',
        },
        indigo: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.5)',
        glow: '0 0 80px rgba(59,87,232,0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
