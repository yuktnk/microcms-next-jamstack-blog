import Link from "next/link";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Header = () => {
  return (
    <header className="w-full pt-2">
      {/* <p className="text-center text-sm ">説明文説明文説明文説明文説明文</p> */}
      <Link href={`/`}>
        <a className="block text-baseBlue text-center text-5xl mt-4">aiueo</a>
      </Link>

      <nav className="flex justify-center my-8">
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button>
            <Link href={`/`}>
              <a className="block px-8">Home</a>
            </Link>
          </Button>
          <Button>
            <Link href={`/about`}>
              <a className="block px-8">About</a>
            </Link>
          </Button>
          <Button>
            <Link href={`/about`}>
              <a className="block px-8">Contact</a>
            </Link>
          </Button>
        </ButtonGroup>
      </nav>
      <p className="bg-grayBlue03 text-white text-center p-2">ここにテキスト</p>
    </header>
  );
};

export default Header;
