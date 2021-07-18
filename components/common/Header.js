import Link from "next/link";

const Header = () => {
  return (
    <header className="h-96 w-full bg-grayBlue02 text-white p-5">
      <p className="text-center text-sm ">説明文説明文説明文説明文説明文</p>
      <Link href={`/`}>
        <a className="block text-baseBlue text-center text-5xl mt-5">aiueo</a>
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