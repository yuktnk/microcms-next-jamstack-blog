import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../libs/client";
import { Contents, Sidebar } from "../components/common/index";

export default function Home({ blog }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex justify-between">
        <Contents articles={blog} />
        <Sidebar />
      </div>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
