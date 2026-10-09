/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px', // 把 lg 延後進入桌機版，讓 1024px 仍算小螢幕
      xl: '1440px',
    },
    extend: {
      colors: {
        ground: '#0D0B0C',   // 底色
        surface: '#161213',  // 卡片
        wax: '#EDE4D6',      // 蠟白：標題
        lead: '#DCD2C3',     // 導言
        body: '#B9AFA2',     // 內文
        muted: '#978D81',    // 註解
        ember: '#F0A35E',    // 燭火：強調
        'ember-light': '#F6C08C',
        ink: '#8A3F1C',      // 筆記墨色
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'serif'],
        latin: ['Cinzel', 'serif'],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
