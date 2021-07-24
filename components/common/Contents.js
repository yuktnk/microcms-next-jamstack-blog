import { Article, Heading02, DynamicPagination } from "./index";

const Contents = (props) => {
  let articles = props.articles;
  return (
    <div className="w-2/3 p-8">
      <Heading02 title="さいしんきじ" />
      <ul className="flex flex-wrap p-4">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </ul>
      <DynamicPagination totalCount={props.totalCount} />
    </div>
  );
};

export default Contents;
