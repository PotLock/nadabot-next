/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      grace: ["Covered By Your Grace", "cursive"],
      oi: ["Oi", "serif"],
    },
    backgroundImage: {
      "footer-texture": "url('/assets/footer/footer-bg.svg')",
    },
    extend: {},
  },
  plugins: [],
};
