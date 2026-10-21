import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0f172a',
        panel: '#111827',
        accent: '#7c3aed',
        accentSoft: '#a78bfa',
        ink: '#e2e8f0',
        muted: '#94a3b8',
        success: '#10b981'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124, 58, 237, 0.2), 0 18px 40px rgba(76, 29, 149, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
