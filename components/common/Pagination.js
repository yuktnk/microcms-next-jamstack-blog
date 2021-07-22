import Router from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ totalCount }) => {
  const PER_PAGE = 2;
  const router = useRouter();
  console.log(router.href);
  console.log(router.protocol);
  console.log(router.host);
  console.log(router.hostname);
  console.log(router.port);
  console.log(router.pathname);
  console.log(router.search);
  console.log(router.hash);

  // rangeの引数に(start, end)を与えて、その値を元に配列を作成する
  // ページネーションのリスト数になる
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i); // 作成した配列をmapして各数値を取り出す

  return (
    <ul className="flex justify-center mx-auto ">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className="mx-4">
          <Link href={`/blog/page/${number}`}>
            <a className="block p-4">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
