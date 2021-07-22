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
        per30: "30%",

        // category colors
        javascript: "#f1e05a",
        react: "#61DAFB",
        gadget: "#54727A",

        // backgroundImage: theme => ({
        //   'fv-img': "url('/images/water.jpg')",
        // })
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
