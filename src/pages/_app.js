import "../styles/recet.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Component {...pageProps} key={router.route} />
  );
}

export default MyApp;
