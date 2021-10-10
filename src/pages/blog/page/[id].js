import Head from 'next/head'
import { client } from '../../../libs/client'
import Layout, { siteTitle } from '../../../components/layout'
import Card from '@material-ui/core/Card'
import { Contents, Sidebar } from '../../../components/organisms/index'

const PER_PAGE = 3

const BlogPageId = ({ articles, totalCount, categories }) => {
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

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const res = await fetch('https://yuktnk-blog.microcms.io/api/v1/blog', key)

  const repos = await res.json()

  // const pageNumbers = [];

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`)

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id
  const offsetNum = (id - 1) * 3

  const articlesData = await client.get({
    endpoint: 'blog',
    queries: { limit: 3, offset: offsetNum },
  })

  const categories = await client.get({ endpoint: 'categories' })

  return {
    props: {
      articles: articlesData.contents,
      categories: categories.contents,
      totalCount: articlesData.totalCount,
    },
  }
}

export default BlogPageId
