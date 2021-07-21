import Link from "next/link";

const Sidebar = (props) => {
  let categories = props.categories;

  return (
    <aside className="bg-white w-1/3 p-8">
      <h2 className="p-4 text-3xl">カテゴリー</h2>
      <ul>
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
