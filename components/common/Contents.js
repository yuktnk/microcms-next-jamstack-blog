import { Article, Heading02, DynamicPagination } from "./index";

const Contents = (props) => {
  let articles = props.articles;
  return (
    <div className="w-full sm:w-2/3 px-5 sm:pl-0 sm:pr-5 py-5 sm:py-0">
      {/* <Heading02 title="さいしんきじ" /> */}
      <ul className="pb-4">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </ul>
      <DynamicPagination totalCount={props.totalCount} />
    </div>
  );
};

export default Contents;
