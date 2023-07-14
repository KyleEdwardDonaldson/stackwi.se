/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  "src/pages/reading.astro"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
};
