import Link from "next/link";
import Image from "next/image";
import { Heading03 } from "./index";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";

const Sidebar = (props) => {
  let categories = props.categories;

  return (
    <aside className="sm:w-1/3 px-5 sm:pl-5 sm:pr-0 mt-10 sm:mt-0 py-5 sm:py-0">
      <Card className="mb-16">
        <figure className="relative h-44">
          <Image src="/images/profile.jpg" art="bg image" layout="fill" objectFit="cover" />
        </figure>
        <div className="p-4 relative">
          <p className="pt-16 pb-4 font-bold text-center text-xl">TNK YUK</p>
          <p className="text-base">
            最強のポケモンをつくりたいという人間のエゴによって、この世に生み落とされた伝説のポケモン。
            <br />
            拘束され、最強の兵器としての実験を繰り返されていくうちに、その心の中に、自分を生み出した人間に対する憎悪の念を宿すようになった。
          </p>
          <div className="flex justify-center mt-4">
            <a href="#" className="block mx-4">
              <GitHubIcon />
            </a>
            <a href="#" className="block mx-4">
              <TwitterIcon />
            </a>
            <a href="#" className="block mx-4">
              <InstagramIcon />
            </a>
          </div>
          {/* <figure className="absolute -top-12 left-1/2 transform -translate-x-1/2 h-24 w-24 rounded-3xl">
            <Image src="/images/hydrangea.jpg" art="bg image" layout="fill" objectFit="cover" />
          </figure> */}
          <Avatar
            alt="Yuk Tnk"
            src="/images/person.jpg"
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 h-28 w-28 border border-materialBackground02 "
          />
        </div>
      </Card>

      <Card className="mb-16">
        <Heading03 title="カテゴリー" />
        <ul className="p-2">
          {categories.map((category) => (
            <li key={category.id} className="">
              <Button>{category.name}</Button>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
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
      </Card>
    </aside>
  );
};

export default Sidebar;
