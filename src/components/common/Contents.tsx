import { Article, DynamicPagination } from "./index";

type ContentsPropsType = {
  articles: [],
  totalCount: number
}

type ArticleType = {
  id: string,
  title: string,
}

const Contents = (props: ContentsPropsType) => {

  let articles = props.articles;

  return (
    <div className="w-full sm:w-2/3 px-4 sm:pl-0 sm:pr-4 py-4 sm:py-0">
      <ul className="pb-4">
        {articles.map((article: ArticleType, index: number) => (
          <Article key={index} article={article} />
        ))}
      </ul>
      <DynamicPagination totalCount={props.totalCount} />
    </div>
  );
};

export default Contents;
