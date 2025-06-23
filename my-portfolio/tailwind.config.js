/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Important for React
    theme: {
      extend: {
        colors: {
          primary: '#0A192F',      // Deep navy blue
          accent: '#FFD700',       // Bright yellow
          background: '#F9F9F9',   // Light gray background
        },
      },
    },
    plugins: [],
  } 