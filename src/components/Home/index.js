import React from "react";
import Icons from "../Icons";
import profile from "../../images/profile.png";
import homestyle from "./home.module.css";
import NavBarNew from "../NavBarNew";

function Home({ setShowHome, setShowProjects }) {
  return (
    <div className={homestyle.home}>
      <NavBarNew className={homestyle.navbarstyle} />
      <div className={homestyle.profile}>
        {" "}
        <div className={homestyle.profileText}>
          <h1 className={homestyle.title}>Dewa Sutton</h1>
          <h2 className={homestyle.subtitle}>Software Engineer</h2>
          <Icons />
        </div>
        <img
          src={profile}
          className={homestyle.profileimage}
          alt={"profile"}
        ></img>
      </div>

      <section>
        <h2 className={homestyle.pinkText}>{"//About"}</h2>
        <p className={homestyle.textBackground}>
          Hi! My name is <b className={homestyle.blueText}> Dewa</b>, and I'm a
          <b className={homestyle.pinkText}> Software developer</b>. I worked
          previously as a Sound Engineer in the TV industry, and have always
          been fascinated and passionate about tech. I took a journey into the
          tech world after discovering the wonderful world of code. I tought
          myself the fundamentals of
          <b className={homestyle.pinkText}> Full Stack Web Development</b>, and
          then decided to apply for the
          <b className={homestyle.blueText}> School of Code Bootcamp</b>.
        </p>
      </section>
    </div>
  );
}

export default Home;
