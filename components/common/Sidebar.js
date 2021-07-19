import Link from "next/link";

const Sidebar = (props) => {
  let categories = props.categories;

  return (
    <aside className="bg-white w-1/3">
      <h2>カテゴリー</h2>
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
