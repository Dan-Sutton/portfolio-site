import React from "react";
import Icons from "../Icons";
import profile from "../../images/profile.png";
import homestyle from "./home.module.css";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import thumbnail from "./biothumb.png";

function Home({ setShowHome, setShowProjects }) {
  return (
    <motion.div
      className={homestyle.home}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
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
      <div className={homestyle.video}>
        <ReactPlayer
          className={homestyle.reactPlayer}
          url="https://www.youtube.com/watch?v=7T-uZa1SCm8"
          controls={false}
          pip={true}
          light={thumbnail}
          wrapper={"div"}
          width="100%"
          height="100%"
        />
      </div>

      <section className={homestyle.aboutsection}>
        <h2 className={homestyle.pinkText}>{"//Bio"}</h2>
        <p className={homestyle.textBackground}>
          Hi! My name is <b className={homestyle.blueText}> Dewa</b>, and I'm a
          <b className={homestyle.pinkText}> Software developer</b> from
          Shropshire. I worked previously as a Sound Engineer in the TV
          industry, and have always been fascinated and passionate about tech. I
          took a journey into the tech world after discovering the wonderful
          world of code. I taught myself the fundamentals of
          <b className={homestyle.pinkText}> Full Stack Web Development</b>, and
          then decided to apply for the
          <b className={homestyle.blueText}> School of Code Bootcamp</b>. This
          Bootcamp drastically changed my life for the better, and equipped me
          with the essential mindset and tools to exist as a successful{" "}
          <b className={homestyle.pinkText}> Software developer</b>.
        </p>
      </section>
      <div className={homestyle.buttoncontain}>
        <a
          href="../../Dewa Sutton CV.pdf"
          download
          className={homestyle.cvbutton}
        >
          View CV
        </a>
      </div>
    </motion.div>
  );
}

export default Home;
