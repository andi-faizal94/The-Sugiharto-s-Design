/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    theme: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    extend: {
      backgroundImage: {
        left: "url('/src/assets/1.png')",
        right: "url('/src/assets/2.png')",
      },
    },
  },
  plugins: [],
};
