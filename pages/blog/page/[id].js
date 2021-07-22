import Link from "next/link";
import { client } from "../../../libs/client";
import { DynamicPagination } from "../../../components/common/index";

const PER_PAGE = 2;

const BlogPageId = ({ articles, totalCount }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`blog/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <DynamicPagination totalCount={totalCount} />
    </div>
  );
};

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://yuktnk-blog.microcms.io/api/v1/blog", key);

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const offsetNum = (id - 1) * 2;

  const articlesData = await client.get({
    endpoint: "blog",
    queries: { limit: 2, offset: offsetNum },
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

export default BlogPageId;
