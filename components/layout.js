import Head from "next/head";
export const siteTitle = "yuktnk blog";
import { Header, Footer } from "./common/index";

import { ThemeProvider } from "@material-ui/styles";
import { MyTheme } from "./theme";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Layout({ children, home }) {
  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <style data-href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"></style>
        <style data-href="https://fonts.googleapis.com/icon?family=Material+Icons"></style>
      </Head>
      <Header />
      {/* <main className=" py-16 bg-lightBlue01 bg-opacity-10">{children}</main> */}
      <Box component="main" bgcolor="primary.main" className=" py-16">
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
