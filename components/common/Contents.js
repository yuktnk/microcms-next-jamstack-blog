import { Article, Heading02, Pagination } from "./index";

const Contents = (props) => {
  let articles = props.articles;
  return (
    <div className="w-2/3 p-8">
      <Heading02 title="さいしんきじ" />
      <ul className="flex flex-wrap p-4">
        {articles.map((article) => (
          <Article article={article} />
        ))}
      </ul>
      <Pagination totalCount={props.totalCount} />
    </div>
  );
};

export default Contents;
