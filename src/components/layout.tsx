import { NextPage } from 'next';
import Head from "next/head";
import { Header, Footer } from "./common/index";
import { ThemeProvider } from "@material-ui/styles";
import { MyTheme } from "./theme";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";

// meta
export const siteTitle = "tanipu blog";
export const siteURL = "https://www.tanipu-blog.com/";
export const metaDescription = "なんちゃってフロントエンドエンジニアが学習していることについてアウトプットするブログです。";
export const metaKeywords = "フロントエンド エンジニア Next.js React microCMS tanipu";

type PropsType = {
  children: React.ReactNode,
  home?: boolean,
}

const Layout: NextPage<PropsType> = ( props: PropsType ) => {
  const{ children , home } = props;

  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:url" content={siteURL} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
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
      <Box component="main" bgcolor="primary.main" className="p-4 -mt-48 sm:pt-12 sm:pb-32 sm:px-4">
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout