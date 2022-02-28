import CVicon from "../../images/CVicon.png";
import Emailicon from "../../images/EmailIcon.png";
import GithubIcon from "../../images/GithubIcon.png"
import LinkedInIcon from "../../images/LinkedinIcon.png"

export default function Icons(){
    return (<div className="icons">
    <img src={CVicon} alt="CV Icon" style={{height: "6vh", width: "auto"}}></img>
    <img src={Emailicon} alt="Email Icon" style={{height: "6vh", width: "auto"}}></img>
    <img src={GithubIcon} alt="Github Icon" style={{height: "6vh", width: "auto"}}></img>
    <img src={LinkedInIcon} alt="LinkedIn Icon" style={{height: "6vh", width: "auto"}}></img>
    
  </div>)
}