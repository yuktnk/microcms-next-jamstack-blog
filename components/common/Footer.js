import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link href={`/about`}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
