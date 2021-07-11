import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
        ボタン
      </button>
      <p className="mb-4">Tailwind cssのテスト</p>
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
