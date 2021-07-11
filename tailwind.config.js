module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        baseBlue: "#61DAFB",

        lightBlue01: "#ADEAFB",

        darkBlue01: "#4EADC7",
        darkBlue02: "#306A7A",

        grayBlue01: "#54727A",
        grayBlue02: "#20232a",
        grayBlue03: "#282c34",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
