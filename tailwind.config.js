/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      mobile: "320px",
    },
    colors: {
      theme: {
        dark: "#212B50",
        darkest: "#03081B",
        orange: "#DB3F29",
        mid: "#D7A449",
        light: "#E8E2D8",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
