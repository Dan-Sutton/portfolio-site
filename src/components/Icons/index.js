import CVicon from "../../images/CVicon.png";
import Emailicon from "../../images/EmailIcon.png";
import GithubIcon from "../../images/GithubIcon.png";
import LinkedInIcon from "../../images/LinkedinIcon.png";

export default function Icons() {
  return (
    <div className="icons">
      <a href="../../Dewa Sutton CV.pdf" download>
        <img src={CVicon} style={{ height: "6vh", width: "auto" }} alt={"CV"} />
      </a>

      <img
        onClick={() => {
          window.open("http://localhost:3000/contact");
        }}
        src={Emailicon}
        alt={"Email"}
        style={{ height: "6vh", width: "auto" }}
      ></img>
      <img
        onClick={() => {
          window.open("https://github.com/Dan-Sutton");
        }}
        src={GithubIcon}
        alt={"GitHub"}
        style={{ height: "6vh", width: "auto" }}
      ></img>
      <img
        onClick={() => {
          window.open("https://www.linkedin.com/in/dewa-sutton/");
        }}
        src={LinkedInIcon}
        alt={"LinkedIn"}
        style={{ height: "6vh", width: "auto" }}
      ></img>
    </div>
  );
}
