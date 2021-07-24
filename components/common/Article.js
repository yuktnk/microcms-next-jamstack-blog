import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import ScheduleIcon from "@material-ui/icons/Schedule";

const Article = (props) => {
  return (
    <li key={props.article.id} className="w-full mb-4 px-4 py-8 border-b duration-300">
      <Link href={`/blog/${props.article.id}`}>
        <a>
          <Card className="h-56">
            <CardActionArea className="flex h-full p-4">
              <figure className="relative w-2/5 h-full">
                <Image
                  src={props.article.thumbnail.url}
                  alt={props.article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
              <div className="w-3/5 pl-4 h-full">
                <h3 className="text-xl mb-2 font-bold">{props.article.title}</h3>
                <div className="flex justify-between items-center text-sm mb-2">
                  <p className="flex items-center">
                    <ScheduleIcon className="w-4 mr-2" />
                    <Date dateString={props.article.publishedAt} />
                  </p>
                  <p
                    className={"text-white px-2 py-1 text-xs " + `bg-${props.article.category.id}`}
                  >
                    {props.article.category && `${props.article.category.name}`}
                  </p>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${props.article.body}`,
                  }}
                  className="overflow-hidden h-1/2 "
                />
              </div>
            </CardActionArea>
          </Card>
        </a>
      </Link>
    </li>
  );
};

export default Article;
