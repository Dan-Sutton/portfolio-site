import CVicon from "../../images/CVicon.png";
import Emailicon from "../../images/EmailIcon.png";
import GithubIcon from "../../images/GithubIcon.png";
import LinkedInIcon from "../../images/LinkedinIcon.png";
import icons from "./icons.module.css";

export default function Icons() {
  return (
    <div className={icons.iconcontainer}>
      <a
        href="../../Dewa Sutton CV.pdf"
        download
        className={(icons.cv, icons.hvrgrow)}
      >
        <img src={CVicon} style={{ height: "7vh", width: "auto" }} alt={"CV"} />
      </a>

      <img
        className={(icons.email, icons.hvrgrow)}
        onClick={() => {
          window.open("http://localhost:3000/contact");
        }}
        src={Emailicon}
        alt={"Email"}
        style={{ height: "7vh", width: "auto" }}
      ></img>
      <img
        className={(icons.git, icons.hvrgrow)}
        onClick={() => {
          window.open("https://github.com/Dan-Sutton");
        }}
        src={GithubIcon}
        alt={"GitHub"}
        style={{ height: "7vh", width: "auto" }}
      ></img>
      <img
        className={(icons.linkedin, icons.hvrgrow)}
        onClick={() => {
          window.open("https://www.linkedin.com/in/dewa-sutton/");
        }}
        src={LinkedInIcon}
        alt={"LinkedIn"}
        style={{ height: "7vh", width: "auto" }}
      ></img>
    </div>
  );
}
