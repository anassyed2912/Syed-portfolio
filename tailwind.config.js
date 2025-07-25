/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // enable dark mode using class strategy
  theme: {
    extend: {
      colors: {
        // 🌙 Dark Mode (you liked this, unchanged)
        primary: '#6366f1',
        secondary: '#a8b2ff',
        tertiary: '#ccd6f6',
        darkNavy: '#0a192f',
        navy: '#112240',
        lightNavy: '#233554',

        // 🌤️ Refined Light Mode
        lightBg: '#f9f7f3',         // page background
        lightSurface: '#f0f0ec',    // cards, nav, etc
        lightText: '#1f2937',       // primary text
        lightMuted: '#6b7280',      // subdued labels

        // 🩵 Shared Accent
        accent: '#acc5d3',

        // Optional Pastels
        pastelGreen: '#d6f0e0',
        pastelPink: '#fce8e6',
        pastelBlue: '#dde9f8',

        // Mint override (less neon)
        mint: '#9ae8d3',
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
