import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const SNS = () => {
  return (
    <div className="flex justify-center">
        <a href="https://github.com/yuktnk/" target="_blank" rel="noopener noreferrer" className="block mx-4">
          <GitHubIcon />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="block mx-4">
          <TwitterIcon />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="block mx-4">
          <InstagramIcon />
        </a>
      </div>
  );
}

export default SNS;
