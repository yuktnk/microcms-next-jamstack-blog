import "../styles/recet.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";
import { useTransitionFix } from "../libs/useTransitionFix.ts";

// import { createTheme } from "@material-ui/core/styles";

// const darkTheme = createTheme({
//   palette: {
//     type: "dark",
//   },
// });

function MyApp({ Component, pageProps, router }) {
  const transitionCallback = useTransitionFix();
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
