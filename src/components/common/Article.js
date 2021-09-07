import Link from "next/link";
import Image from "next/image";
import Date from "../date";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import ScheduleIcon from "@material-ui/icons/Schedule";

const Article = (props) => {

  let categoryName = "";
  if (props.article.category.id === "react_nextjs") {
    categoryName = "bg-react_nextjs";
  } else if (props.article.category.id === "typescript") {
    categoryName = "bg-typescript";
  } else if (props.article.category.id === "others") {
    categoryName = "bg-others";
  } else if (props.article.category.id === "javascript") {
    categoryName = "bg-javascript";
  } else if (props.article.category.id === "gadget") {
    categoryName = "bg-gadget";
  }


  return (
    <li
      key={props.article.id}
      className="w-full mb-8 pb-4 px-0 sm:px-4 border-b border-baseBlue border-opacity-50"
    >
      <Link href={`/blog/${props.article.id}`}>
        <a>
          <Card className="h-96 sm:h-56">
            <CardActionArea className="sm:flex block h-full sm:p-4 p-0">
              <figure className="relative h-1/2 sm:h-full w-full sm:w-2/5">
                <Image
                  src={props.article.thumbnail.url}
                  alt={props.article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
              <div className="sm:w-3/5 sm:pl-4 p-4 h-1/2 sm:h-full">
                <h3 className="text-xl mb-2 font-bold">{props.article.title}</h3>
                <div className="flex justify-between items-center text-sm mb-2">
                  <p className="flex items-center">
                    <ScheduleIcon className="w-4 mr-2" />
                    <Date dateString={props.article.publishedAt} />
                  </p>
                  <p
                    className={"text-white px-2 py-1 text-xs " + `${categoryName}`}
                  >
                    {props.article.category && `${props.article.category.name}`}
                  </p>
                </div>
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: `${props.article.body}`,
                  }}
                  className="overflow-hidden h-1/2 "
                /> */}
              </div>
            </CardActionArea>
          </Card>
        </a>
      </Link>
    </li>
  );
};

export default Article;
