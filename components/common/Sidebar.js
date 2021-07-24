import Link from "next/link";
import Image from "next/image";
import { Heading03 } from "./index";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

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
          <a href="#" className="block mr-4">
            <GitHubIcon className="w-8 " />
          </a>
          <a href="#" className="block mr-4">
            <TwitterIcon />
          </a>
          <a href="#" className="block mr-4">
            <InstagramIcon />
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
