import Link from "next/link";
import Image from "next/image"
import { Heading03 } from "./index"

const Sidebar = (props) => {
  let categories = props.categories;

  return (
    <aside className="bg-white w-1/3 p-8">
      <Heading03 title="プロフィール"/>
      <p className="p-4">
        ここにプロフィール文章が入る<br />
        ここにプロフィール文章が入ここにプロフィール文章が入る<br />
        ここにプロフィール文章が入る<br />
      </p>
      <Heading03 title="カテゴリー"/>
      <ul className="p-4">
        {categories.map((category) => (
          <li key={category.id} className="">
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
