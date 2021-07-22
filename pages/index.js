import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../libs/client";
import { Contents, Sidebar } from "../components/common/index";

export default function Home({ articles, categories, totalCount }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="mx-auto max-w-7xl flex justify-between p-8 shadow-xl bg-white">
        <Contents articles={articles} totalCount={totalCount} />
        <Sidebar categories={categories} />
      </div>
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
