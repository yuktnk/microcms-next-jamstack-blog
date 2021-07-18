import Router from "next/router";
import Link from "next/link";

const Pagination = ({ totalCount }) => {
  const PER_PAGE = 2;

  // rangeの引数に(start, end)を与えて、その値を元に配列を作成する
  // ページネーションのリスト数になる
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i); // 作成した配列をmapして各数値を取り出す

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
