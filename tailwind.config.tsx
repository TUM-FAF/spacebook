// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFF9F1',
          text: '#010102',
          accent: '#FF3B01',
        },
        dark: {
          background: '#010102',
          text: '#FFF9F1',
          accent: '#FF3B01',
        },
      },
    },
  },
  plugins: [],
};
