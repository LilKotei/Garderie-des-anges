/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        'red': '0 4px 14px 0 rgba(255, 0, 0, 0.1)',
        'green': '0 4px 14px 0 rgba(0, 255, 0, 0.1)',
        'blue': '0 4px 14px 0 rgba(173,216,230, 0.1)',
      },
    },
  },
  plugins: [],
}

