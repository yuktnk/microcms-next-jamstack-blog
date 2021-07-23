import Link from "next/link";
import Layout from "../../components/layout";
import { client } from "../../libs/client";
import styles from "../../styles/Article.module.scss";
import Date from "../../components/date";

export default function BlogId({ blog }) {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl text-white text-center mb-4 ">{blog.title}</h1>
        <p className="text-white text-center mb-4">
          <Date dateString={blog.publishedAt} />
        </p>
        <p className="text-white text-center">{blog.category && `${blog.category.name}`}</p>
        <div className={styles.postWrapper}>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
            className={styles.post}
          />
        </div>
        <Link href="/">
          <a>topへ戻る</a>
        </Link>
      </div>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
