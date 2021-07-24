import Link from "next/link";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Header = () => {
  return (
    <header className="w-full h-96 ">
      {/* <p className="text-center text-sm ">説明文説明文説明文説明文説明文</p> */}
      <div className="pt-16 h-full bg-black bg-opacity-10">
        <Link href={`/`}>
          <a className="block text-baseBlue text-center text-5xl pt-4">aiueo</a>
        </Link>
        <nav className="flex justify-center py-8">
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>
              <Link href={`/`}>
                <a className="block sm:px-8 px-2">Home</a>
              </Link>
            </Button>
            <Button>
              <Link href={`/about`}>
                <a className="block sm:px-8 px-2">About</a>
              </Link>
            </Button>
            <Button>
              <Link href={`/about`}>
                <a className="block sm:px-8 px-2">Contact</a>
              </Link>
            </Button>
          </ButtonGroup>
        </nav>
      </div>
      {/* <p className="bg-grayBlue03 text-white text-center p-2">ここにテキスト</p> */}
    </header>
  );
};

export default Header;
