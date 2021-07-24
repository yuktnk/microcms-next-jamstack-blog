import Link from "next/link";
import Image from "next/image";
import Date from "../../components/date";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import ScheduleIcon from "@material-ui/icons/Schedule";

// import { motion } from "framer-motion";

// const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

// const frameVariants = {
//   hover: { scale: 1.045 },
// };

const Article = (props) => {
  return (
    <li
      key={props.article.id}
      className="w-full mb-4 sm:px-4 px-2 sm:py-8 py-4 border-b border-grayBlue01"
    >
      {/* <motion.div whileHover="hover" variants={frameVariants} transition={transition}> */}
      <Link href={`/blog/${props.article.id}`}>
        <a>
          <Card className="sm:h-56 h-96">
            <CardActionArea className="sm:flex block h-full sm:p-4 p-0">
              <figure className="relative sm:w-2/5 w-full sm:h-full h-1/2">
                <Image
                  src={props.article.thumbnail.url}
                  alt={props.article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
              <div className="sm:w-3/5 sm:pl-4 p-4 sm:h-full h-1/2">
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
      {/* </motion.div> */}
    </li>
  );
};

export default Article;
