const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "JIT",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      alfa: ["Rubik Mono One"],
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        typography: ["Dancing Script"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
