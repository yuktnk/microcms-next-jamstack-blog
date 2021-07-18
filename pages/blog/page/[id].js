import Link from "next/link";
import { client } from "../../../libs/client";
import { Pagination } from "../../../components/common/index";

const PER_PAGE = 2;

// pages/blog/[id].js
export default function BlogPageId({ articles, totalCount }) {
  return (
    <div>
      <ul>
        {articles.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </div>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://yuktnk-blog.microcms.io/api/v1/blog", key);

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   const key = {
//     headers: { "X-API-KEY": process.env.API_KEY },
//   };

//   const data = await fetch(
//     `https://yuktnk-blog.microcms.io/api/v1/blog?offset=${
//       (id - 1) * 5
//     }&limit=5`,
//     key
//   )
//     .then((res) => res.json())
//     .catch(() => null);

//   return {
//     props: {
//       blog: data.contents,
//       totalCount: data.totalCount,
//     },
//   };
// };

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
