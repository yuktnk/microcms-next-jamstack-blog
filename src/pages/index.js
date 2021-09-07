import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../libs/client";
import { Contents, Sidebar } from "../components/common/index";
import Card from "@material-ui/core/Card";


export default function Home({ articles, categories, totalCount }) {

  console.log(articles[0].category.id)

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
  );
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const articlesData = await client.get({
    endpoint: "blog",
    queries: { limit: 2 },
  });
  const categories = await client.get({ endpoint: "categories" });
  return {
    props: {
      articles: articlesData.contents,
      categories: categories.contents,
      totalCount: articlesData.totalCount,
    },
  };
};
