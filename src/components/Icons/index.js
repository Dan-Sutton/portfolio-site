import CVicon from "../../images/CVicon.png";
import Emailicon from "../../images/EmailIcon.png";
import GithubIcon from "../../images/GithubIcon.png";
import LinkedInIcon from "../../images/LinkedinIcon.png";

export default function Icons() {
  return (
    <div className="icons">
      <img src={CVicon} style={{ height: "6vh", width: "auto" }}></img>
      <img src={Emailicon} style={{ height: "6vh", width: "auto" }}></img>
      <img src={GithubIcon} style={{ height: "6vh", width: "auto" }}></img>
      <img src={LinkedInIcon} style={{ height: "6vh", width: "auto" }}></img>
    </div>
  );
}
