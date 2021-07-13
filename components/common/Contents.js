import Link from "next/link";
import Image from "next/image";

const Contents = (props) => {
  let blogContents = props.articles;
  return (
    <div className="w-full mr-6">
      <ul className="flex justify-between flex-wrap">
        {blogContents.map((article) => (
          <li key={article.id} className="border-2 w-2/5 mb-4">
            <Link href={`/blog/${article.id}`}>
              <a>{article.title}</a>
            </Link>
            {/* <p>{article.thumbnail.url}</p> */}
            <Image
              src={article.thumbnail.url}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
