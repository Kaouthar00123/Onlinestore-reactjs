const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
