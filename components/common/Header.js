import Link from "next/link";

const Header = () => {
  return (
    <header className="h-32 bg-grayBlue02 text-white p-5">
      <p className="text-center text-sm ">学習のアウトプットをするよyoyo</p>
      <Link href={`/`}>
        <a className="block text-baseBlue text-center text-5xl mt-5">
          yuktnk-blog
        </a>
      </Link>

      {/* <nav>
        <ul>
          <li>
            <Link href={`/about`}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
