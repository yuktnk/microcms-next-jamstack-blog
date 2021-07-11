import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../libs/client";
import { Sidebar } from "../components/common/index";

export default function Home({ blog }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex justify-between">
        <div className="w-3/5">
          <ul className="flex justify-between flex-nowrap">
            {blog.map((blog) => (
              <li key={blog.id} className="border-2">
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button className="btn bg-red-700 hover:bg-red-500">ボタン</button>
        </div>

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
