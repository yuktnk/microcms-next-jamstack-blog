import Link from "next/link";
import Image from "next/image";

const Contents = (props) => {
  let articles = props.articles;
  return (
    <div className="w-full mr-6">
      <ul className="flex flex-wrap px-4">
        {articles.map((article) => (
          <li key={article.id} className="w-1/3 px-4 mb-4">
            {/* <p>{article.thumbnail.url}</p> */}

            <Link href={`/blog/${article.id}`}>
              <a>
                <Image
                  src={article.thumbnail.url}
                  alt={article.title}
                  width={500}
                  height={200}
                />
                <p className="text-center">{article.title}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
