import Head from 'next/head'
import { client } from '../libs/client'
import Layout, { siteTitle } from '../components/layout'
import { About } from '../components/molecules/index'
import { Sidebar } from '../components/organisms/index'
import Card from '@material-ui/core/Card'

export default function AboutIndex({ categories }: { categories: [] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Card className="mx-auto max-w-7xl sm:flex block justify-between p-0 sm:p-2 md:p-4 lg:p-8 ">
        <About />
        <Sidebar categories={categories} />
      </Card>
    </Layout>
  )
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  type categoriesType = {
    contents: Object[]
  }

  const categories: categoriesType = await client.get({ endpoint: 'categories' })

  return {
    props: {
      categories: categories.contents,
    },
  }
}
