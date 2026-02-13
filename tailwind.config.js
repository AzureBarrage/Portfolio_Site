/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgb(15 23 42 / 0.35)',
      },
    },
  },
  plugins: [],
};
