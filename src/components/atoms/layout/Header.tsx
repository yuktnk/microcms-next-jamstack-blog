import Link from 'next/link'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Header = () => {
  return (
    <header className="w-full h-96 ">
      <div className="pt-16 h-full bg-black bg-opacity-20">
        <Link href={`/`}>
          <a className="block text-baseBlue text-center text-5xl pt-4 font-montserrat">yuktnk blog</a>
        </Link>
        <nav className="flex justify-center py-8">
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>
              <Link href={`/`}>
                <a className="block sm:px-8 px-2">Home</a>
              </Link>
            </Button>
          </ButtonGroup>
        </nav>
      </div>
    </header>
  )
}

export default Header
