import Image from "next/image";
import { Heading03, SNS } from "./index";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

type SidebarPropsType ={ categories: [] }


type categoryObjectType = {
  id: string,
  name: string,
}

const Sidebar = (props: SidebarPropsType) => {

  let categories = props.categories;

  return (
    <aside className="sm:w-1/3 px-4 sm:pl-4 sm:pr-0 mt-8 sm:mt-0 py-4 sm:py-0">
      <Card className="mb-16">
        <figure className="relative h-44">
          <Image src="/images/profile.jpg" alt="背景画像" layout="fill" objectFit="cover" />
        </figure>
        <div className="py-8 px-4 sm:p-8 relative">
          <p className="pt-8 pb-4 font-bold text-center text-xl">tanipu</p>
          <p className="text-sm sm:text-base text-center mb-4">
            都内受託開発企業に在籍中
            <br/>
            なんちゃってフロントエンドエンジニア。
            <br/>
            <br/>
            日々の学習をアウトプットします。
          </p>
          <SNS />
          <figure className="absolute -top-12 left-1/2 transform -translate-x-1/2 h-28 w-28 border border-materialBackground02 rounded-full">
            <Image
              src="/images/person.jpg"
              alt="tanipu"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </figure>
        </div>
      </Card>

      <Card className="mb-16">
        <Heading03 title="Category(未構築)" />
        <ul className="p-2">
          {categories.map((category: categoryObjectType) => (
            <li key={category.id} className="">
              <Button>{category.name}</Button>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <Heading03 title="Archive(未構築)" />
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
