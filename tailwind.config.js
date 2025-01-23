/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['Minecraft', 'sans-serif'],
      },
      colors: {
        kali: {
          primary: '#73daca',
          secondary: '#7dcfff',
          dark: '#1a1b26',
          card: '#24283b',
          text: '#a9b1d6',
          accent: '#ff79c6',
        },
      },
    },
  },
  plugins: [],
};