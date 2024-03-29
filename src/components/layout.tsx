import Head from 'next/head'
import { Header, Footer } from './atoms/'
import { ThemeProvider } from '@mui/material/styles'
import { MyTheme } from './theme'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

// meta
export const siteTitle = 'yuktnk blog'
export const siteURL = 'https://www.tanipu-blog.com/'
export const metaDescription =
  'なんちゃってフロントエンドエンジニアが学習していることについてアウトプットするブログです。'
export const metaKeywords = 'フロントエンド エンジニア Next.js React microCMS yuktnk'

const Layout = ({ children, home }: { children: React.ReactNode; home?: boolean }) => {
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
        <style data-href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"></style>
        <style data-href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"></style>
        <style data-href="https://fonts.googleapis.com/icon?family=Material+Icons"></style>
      </Head>

      <Header />
      <Box component="main" bgcolor="primary.main" className="p-4 -mt-48 sm:pt-12 sm:pb-32 sm:px-4">
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
