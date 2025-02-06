/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
        'bodoni': ['"Bodoni Moda SC"', 'serif'],
        'playwrite': ['"Playwrite AU QLD"', 'cursive'],
        'signika': ['"Signika Negative"', 'sans-serif'],
        futura: ["Futura", "sans-serif"],
        quad: ["Quad", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      boxShadow: {
        'text': '20px 20px 20px rgba(0, 0, 0, 0.4)',  // Adjust the shadow as needed
      },
      colors: {
        customSelection: '#ffbd59', // Define your custom color
        primary: '#ffbd59', // Custom primary color
        secondary: '#ba7105', // Custom secondary color
      },
      backgroundImage: {
        'dot-bg': "url('/assets/dotBg.png')",
      },
  },
};
export const plugins = [
   [
    function ({ addUtilities }) {
      addUtilities({
        '::selection': {
          color: '#ffbd59', // Text color when selected
        },
      }, ['responsive', 'hover']);
    },
  ],
];
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1E40AF', // Custom primary color
//         secondary: '#9333EA', // Custom secondary color
//       },
//     },
//   },
//   plugins: [],
// };