/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Ensure this is present
    './src/**/*.{js,ts,jsx,tsx}', // Include all components and files where classes are used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
