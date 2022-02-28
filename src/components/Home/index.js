import React from "react";
import Icons from "../Icons";
import profile from "../../images/profile.png";

function Home() {
  return (
    <div>
      <h1>Dewa Sutton</h1>
      <p>Software Engineer</p>
      <Icons />
      <img
        src={profile}
        alt="profile picture"
        style={{ height: "30vh", width: "auto" }}
      ></img>
      <button>Projects</button>

      <section>
        <h2>//About</h2>
        <p>
          Hi! My name is Dewa, and I'm a Software developer. I worked previously
          as a Sound Engineer in the TV industry, and have always been
          fascinated and passionate about tech. I took a journey into the tech
          world after discovering the wonderful world of code. I tought myself
          the fundamentals of Fullstack Web Development, and then decided to
          apply for the School of Code Bootcamp.
        </p>
      </section>
    </div>
  );
}

export default Home;
