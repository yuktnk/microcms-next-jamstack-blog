import "../styles/recet.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";
// import { createTheme } from "@material-ui/core/styles";

// const darkTheme = createTheme({
//   palette: {
//     type: "dark",
//   },
// });

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
