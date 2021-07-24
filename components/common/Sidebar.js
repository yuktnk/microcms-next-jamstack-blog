import Link from "next/link";
import Image from "next/image";
import { Heading03 } from "./index";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";

const Sidebar = (props) => {
  let categories = props.categories;

  return (
    <aside className="sm:w-1/3 p-0 sm:p-2 md:p-4 lg:p-8 sm:mt-0 mt-10">
      <div className="mb-16">
        <Heading03 title="プロフィール" />
        <p className="px-2 py-4">
          ここにプロフィール文章が入る
          <br />
          ここにプロフィール文章が入ここにプロフィール文章が入る
          <br />
          ここにプロフィール文章が入る
          <br />
        </p>
        <div className="flex p-2">
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
        <ul className="p-2">
          {categories.map((category) => (
            <li key={category.id} className="">
              <Button>{category.name}</Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16">
        <Heading03 title="記事を月別で見る" />
        <ul className="p-2">
          <li>
            <Button>2021年7月</Button>
          </li>
          <li>
            <Button>2021年6月</Button>
          </li>
          <li>
            <Button>2021年5月</Button>
          </li>
          <li>
            <Button>2021年4月</Button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
