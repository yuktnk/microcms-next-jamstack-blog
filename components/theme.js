import { createTheme } from "@material-ui/core/styles";

export const MyTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      light: "##ffacff",
      main: "##e47afa",
      dark: "##b049c7",
      contrastText: "#000000",
    },
    secondary: {
      light: "#9affff",
      main: "#61dafb",
      dark: "#10a8c8",
      contrastText: "#000000",
    },
    background: {
      // default: "#121212",
    },
  },
});
