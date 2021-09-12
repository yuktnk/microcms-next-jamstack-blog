import { NextPage, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import { client } from "../../libs/client";
import styles from "../../styles/Article.module.scss";
import Date from "../../components/date";
import { Button, Card } from "@material-ui/core";
import { Sidebar } from "../../components/common/index";
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css';

type blogDataType = {
  title: string,
  publishedAt: string,
  category: {
    name:string
  }
}

type PropsType = {
  blogData: blogDataType,
  categories: [],
  coloredBody: string,
}

const BlogId: NextPage<PropsType> = (props: PropsType) => {

  const { blogData, categories, coloredBody } = props;

  return (
    <Layout>
      <Head>
        <title>{blogData.title}｜{siteTitle}</title>
      </Head>
      <Card className="mx-auto max-w-7xl sm:flex block justify-between p-0 sm:p-2 md:p-4 lg:p-8 ">
        <Card className="w-full sm:w-2/3">
          <div className="p-4">
            <h1 className="text-xl sm:text-4xl text-white text-center mb-4 ">{blogData.title}</h1>
            <p className="text-white text-center mb-4">
              <Date dateString={blogData.publishedAt} />
            </p>
            <p className="text-white text-center">{blogData.category && `${blogData.category.name}`}</p>
          </div>
          <div className={styles.postWrapper}>
            <div
              dangerouslySetInnerHTML={{
                __html: coloredBody
              }}
              className={styles.post}
            />
          </div>
          <Button
              variant="contained"
              className="my-12 mx-auto block"
          >
            <Link href="/"><a>topへ戻る</a></Link>
          </Button>
        </Card>
        <Sidebar categories={categories} />
      </Card>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  type dataType = {
    contents: [
      {
        id: number
      }
    ]
  }

  const data: dataType = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

  type categoriesType = {
    contents: []
  }
  type dataType = {
    body: string
  }

  const id = context.params.id;
  const data: dataType = await client.get({ endpoint: "blog", contentId: id });
  const categories: categoriesType = await client.get({ endpoint: "categories" });

  const $ = cheerio.load(data.body);

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blogData: data,
      coloredBody: $.html(),
      categories: categories.contents,
      categoriestest: categories,
    },
  };
};


export default BlogId;