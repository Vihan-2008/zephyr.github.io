/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BAD3E4',         // Dark blue (top-right)
        secondary: '#507B9E',       // Dark blue (bottom-right)
        tertiary: '#FFFFFF',        // White (bottom-left)
        background: '#FFFFFF',      // White (top-left)
        gray: '#FFFFFF',            // White for neutrals (optional)
        gray2: '#FFFFFF',           // White for secondary elements
        gradientTop: '#FFB38E',     // Light blue gradient
        gradientBottom: '#FFB38E',  // Dark blue gradient
      },
    },
  },
  plugins: [],
};
