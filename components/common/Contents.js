import Link from "next/link";

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
            <img src={article.thumbnail.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
