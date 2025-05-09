import * as Style from "./Footer.styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Style.Container>
      <h1>CONTATO</h1>
      <Style.SocialMedias>
        <div className="media">
          <EmailIcon className="email-icon" />
          <span>andersonheidrichleite@gmail.com</span>
        </div>
        <div className="media">
          <a
            href="https://www.linkedin.com/in/andersonheidrich/"
            target="_blank"
          >
            <LinkedInIcon className="media-icon" />
          </a>
        </div>
        <div className="media">
          <a href="https://github.com/andersonheidrich/" target="_blank">
            <GitHubIcon className="media-icon" />
          </a>
        </div>
      </Style.SocialMedias>
    </Style.Container>
  );
};

export default Footer;
