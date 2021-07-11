import Link from "next/link";

const Header = () => {
  return (
    <header>
      <p>学習のアウトプットをするよyoyo</p>
      <div>
        <Link href={`/`}>
          <a>yuktnk-blog</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={`/about`}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
