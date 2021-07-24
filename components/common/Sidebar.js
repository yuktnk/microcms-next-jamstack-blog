import Link from "next/link";
import Image from "next/image";
import { Heading03 } from "./index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = (props) => {
  let categories = props.categories;

  return (
    <aside className="bg-white w-1/3 p-8">
      <div className="mb-16">
        <Heading03 title="プロフィール" />
        <p className="p-4">
          ここにプロフィール文章が入る
          <br />
          ここにプロフィール文章が入ここにプロフィール文章が入る
          <br />
          ここにプロフィール文章が入る
          <br />
        </p>
        <div className="flex p-4">
          <a href="#">
            <FontAwesomeIcon icon={faGithub} className="w-8 mr-4" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="w-8 mr-4" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="w-8" />
          </a>
        </div>
      </div>

      <div className="mb-16">
        <Heading03 title="カテゴリー" />
        <ul className="p-4">
          {categories.map((category) => (
            <li key={category.id} className="">
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16">
        <Heading03 title="記事を月別で見る" />
        <ul className="p-4">
          <li>2021年7月</li>
          <li>2021年6月</li>
          <li>2021年5月</li>
          <li>2021年4月</li>
          <li>2021年3月</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
