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
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-raised': 'var(--color-surface-raised)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        border: 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
        indigo: { DEFAULT: 'var(--color-primary)', dark: 'var(--color-primary-active)' },
        violet: 'var(--color-secondary)',
        ember: 'var(--color-accent)',
        seafoam: 'var(--color-success)',
        rose: 'var(--color-error)',
        /* Legacy ink aliases — map to tokens */
        ink: {
          950: 'var(--color-bg)',
          900: 'var(--color-bg)',
          850: 'var(--color-bg-subtle)',
          800: 'var(--color-surface)',
          750: 'var(--color-surface-raised)',
          700: 'var(--color-border)',
          500: 'var(--color-text-secondary)',
          300: 'var(--color-text-secondary)',
          100: 'var(--color-text)',
        },
        brand: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          light: 'var(--color-primary-hover)',
        },
        green: {
          500: 'var(--color-success)',
          400: 'var(--color-success-text)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      borderRadius: {
        component: 'var(--radius-component)',
        card: 'var(--radius-card)',
        modal: 'var(--radius-modal)',
        button: 'var(--radius-button)',
      },
      boxShadow: {
        card: 'var(--shadow-md)',
        glow: 'var(--shadow-glow-primary)',
        'glow-primary': 'var(--shadow-glow-primary)',
        'glow-secondary': 'var(--shadow-glow-secondary)',
        'glow-accent': 'var(--shadow-glow-accent)',
      },
    },
  },
  plugins: [],
};
export default config;
