import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const SNS = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://github.com/yuktnk/"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-4"
      >
        <GitHubIcon />
      </a>
      <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="block mx-4">
        <TwitterIcon />
      </a>
      <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="block mx-4">
        <InstagramIcon />
      </a>
    </div>
  )
}

export default SNS
