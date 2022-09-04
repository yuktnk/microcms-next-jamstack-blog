import Link from 'next/link'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Header = () => {
  return (
    <header className="w-full h-96 ">
      <div className="pt-4 h-full bg-black bg-opacity-20">
        <Link href={`/`}>
          <a className="block text-baseBlue text-center  font-montserrat">yuktnk blog</a>
        </Link>
        <p className="text-center my-1 font-bold">
          一年越しにリニューアルしようと思ったけど
          <br />
          ディレクトリ構成ぐちゃぐちゃだし
          <br />
          MUI +TailwindCSSでUI構築していたりと
          <br />
          手間がかかりそうなので近々Closeする予定のぶろぐ
          <br />
          <a
            className="block text-center text-2xl text-baseBlue"
            href="https://github.com/yuktnk/microcms-next-jamstack-blog/blob/main/README.md"
          >
            README
          </a>
        </p>
        <nav className="flex justify-center">
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>
              <Link href={`/`}>
                <a className="block sm:px-4 px-1">Home</a>
              </Link>
            </Button>
          </ButtonGroup>
        </nav>
      </div>
    </header>
  )
}

export default Header
