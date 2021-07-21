import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";

const Contents = (props) => {
  let articles = props.articles;
  return (
    <div className="w-2/3 p-8">
      <h2 className="p-4 text-3xl">さいしんきじ</h2>
      <ul className="flex flex-wrap p-4">
        {articles.map((article) => (
          <li key={article.id} className="py-4 my-4 w-full h-52">
            <Link href={`/blog/${article.id}`}>
              <a className="flex h-full">
                <figure className="relative w-2/5">
                  <Image
                    src={article.thumbnail.url}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
                <div className="w-3/5 pl-4">
                  <p className="">{article.title}</p>
                  <p>{article.category && `${article.category.name}`}</p>
                  <p><Date dateString={article.publishedAt} /></p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
