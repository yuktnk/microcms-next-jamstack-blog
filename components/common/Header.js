import Link from "next/link";

const Header = () => {
  return (
    <header className="h-48 w-full pt-2">
      <p className="text-center text-sm ">説明文説明文説明文説明文説明文</p>
      <Link href={`/`}>
        <a className="block text-baseBlue text-center text-5xl mt-4">aiueo</a>
      </Link>

      <nav>
        <ul className="flex justify-center">
          <li>
            <Link href={`/about`}>
              <a className="block py-4 px-8">About</a>
            </Link>
          </li>
          <li>
            <Link href={`/about`}>
              <a className="block py-4 px-8">About</a>
            </Link>
          </li>
          <li>
            <Link href={`/about`}>
              <a className="block py-4 px-8">About</a>
            </Link>
          </li>
          <li>
            <Link href={`/about`}>
              <a className="block py-4 px-8">About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className="bg-grayBlue03 text-white text-center p-2">ここにテキスト</p>
    </header>
  );
};

export default Header;
