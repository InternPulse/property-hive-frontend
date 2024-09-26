/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "878px", 
      },
    },
  },
  plugins: [],
};


// tailwind.config.js
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         custom: "878px", // Custom screen size if needed
//       },
//     },
//   },
//   plugins: [],
// };
