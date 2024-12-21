/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        intel: ["Inter", "serif"],
      },
      boxShadow: {
        card: "0px 0px 24px 0 rgba( 8, 23, 53, 0.16) ",
        navLink: "0px 1px 2px 0px rgba(10, 13, 18, 0.05)",
      },
      dropShadow: {
        navLinkInner: "0px -2px 0px 0px rgba(10, 13, 18, 0.05)",
      },
      backgroundImage: {
        logo: "url('/src/assets/images/bg-logo.png')",
      },
    },
  },
  plugins: [],
};
