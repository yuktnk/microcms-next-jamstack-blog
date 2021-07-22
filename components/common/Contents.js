import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";
import { Heading02, Pagination } from "./index";
// import styles from "../../styles/Article.module.scss";

const Contents = (props) => {
  let articles = props.articles;
  return (
    <div className="w-2/3 p-8">
      <Heading02 title="さいしんきじ" />
      <ul className="flex flex-wrap p-4">
        {articles.map((article) => (
          <li key={article.id} className="w-full my-4 h-56 hover:shadow-xl border-b">
            <Link href={`/blog/${article.id}`}>
              <a className="flex h-full p-4">
                <figure className="relative w-2/5">
                  <Image src={article.thumbnail.url} alt={article.title} layout="fill" objectFit="cover" />
                </figure>
                <div className="w-3/5 pl-4">
                  <h3 className="text-xl mb-2 font-bold">{article.title}</h3>
                  <div className="flex justify-between text-grayBlue01 text-sm mb-2">
                    <p>
                      <Date dateString={article.publishedAt} />
                    </p>
                    <p>{article.category && `${article.category.name}`}</p>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${article.body}`,
                    }}
                    className="overflow-hidden h-1/2"
                  />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={props.totalCount} />
    </div>
  );
};

export default Contents;
