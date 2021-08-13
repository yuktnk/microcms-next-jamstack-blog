import Link from "next/link";
import Layout from "../../components/layout";
import { client } from "../../libs/client";
import styles from "../../styles/Article.module.scss";
import Date from "../../components/date";
import Card from "@material-ui/core/Card";

import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css';



export default function BlogId({ blog, highlightedBody }) {

  return (
    <Layout>
      <div className="mx-auto max-w-7xl bg-materialBackground01">
        <div className="pt-16">
          <h1 className="text-4xl text-white text-center mb-4 ">{blog.title}</h1>
          <p className="text-white text-center mb-4">
            <Date dateString={blog.publishedAt} />
          </p>
          <p className="text-white text-center">{blog.category && `${blog.category.name}`}</p>
        </div>
        <Card className={styles.postWrapper}>
          <div
            dangerouslySetInnerHTML={{
              // __html: `${$.html()}`
              __html: highlightedBody
            }}
            className={styles.post}
          />
        </Card>
        <Link href="/">
          <a>topへ戻る</a>
        </Link>
      </div>
    </Layout>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(data.body);

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};
