/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px', // 把 lg 延後進入桌機版，讓 1024px 仍算小螢幕
      xl: '1440px',
    },
  }

};


