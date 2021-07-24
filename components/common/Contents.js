import { Article, Heading02, DynamicPagination } from "./index";

const Contents = (props) => {
  let articles = props.articles;
  return (
    <div className="w-full sm:w-2/3 sm:p-8 p-0">
      <Heading02 title="さいしんきじ" />
      <ul className="py-4">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </ul>
      <DynamicPagination totalCount={props.totalCount} />
    </div>
  );
};

export default Contents;
