import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { client } from '../../libs/client'
import { Contents, Sidebar } from '../../components/organisms/index'
import Card from '@material-ui/core/Card'

// import { useRouter } from 'next/router';

export default function Home({ articles, categories, totalCount }) {
  // const router = useRouter();
  // console.log(router.pathname);
  // console.log(router.query.categoryName);
  // console.log(router.asPath);
  // console.log(router.isFallback);
  // console.log(router.basePath);
  // console.log(router.locale);
  // console.log(router.locales);
  // console.log(router.defaultLocale);
  // console.log(router.domainLocales);
  // console.log(router.isReady);
  // console.log(router.isPreview);
  // console.log(router.domainLocales);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Card className="mx-auto max-w-7xl sm:flex block justify-between p-0 sm:p-2 md:p-4 lg:p-8 ">
        <Contents articles={articles} totalCount={totalCount} />
        <Sidebar categories={categories} />
      </Card>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const categoriesData = await client.get({ endpoint: 'categories' })
  const paths = categoriesData.contents.map((category) => `/category/${category.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (params) => {
  if (params === undefined) {
    throw Error('pagesの、ディレクトリ構造かファイル名が間違っています。')
  }

  const categories = await client.get({ endpoint: 'categories' })

  const articlesData = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 3,
      filters: `category[equals]${params.id}`,
    },
  })

  return {
    props: {
      articles: articlesData.contents,
      categories: categories.contents,
      totalCount: articlesData.totalCount,
    },
  }
}
