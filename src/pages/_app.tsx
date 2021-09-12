import "../styles/recet.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <Component {...pageProps} key={router.route} />
  );
}

export default MyApp;
