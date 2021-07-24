import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRss } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
  return (
    <li key={props.article.id} className="w-full my-4 h-56 hover:shadow-xl border-b duration-300">
      <Link href={`/blog/${props.article.id}`}>
        <a className="flex h-full p-4">
          <figure className="relative w-2/5">
            <Image
              src={props.article.thumbnail.url}
              alt={props.article.title}
              layout="fill"
              objectFit="cover"
            />
          </figure>
          <div className="w-3/5 pl-4">
            <h3 className="text-xl mb-2 font-bold">{props.article.title}</h3>
            <div className="flex justify-between items-center text-grayBlue01 text-sm mb-2">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="w-4 mr-2" />
                <Date dateString={props.article.publishedAt} />
              </p>
              <p className={"text-white px-2 py-1 text-xs " + `bg-${props.article.category.id}`}>
                {props.article.category && `${props.article.category.name}`}
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${props.article.body}`,
              }}
              className="overflow-hidden h-1/2 text-grayBlue01"
            />
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Article;
