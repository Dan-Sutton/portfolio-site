import React from "react";
import "./module.navbar.css";
import Toggle from "./Toggle";

function Navbar({ handleMode, mode }) {
  return (
    <ul className="navbar" className={mode}>
      <li>//DAN SUTTON</li>
      <li>Projects</li>
      <li>Contact</li>
      <Toggle handleMode={handleMode} />
    </ul>
  );
}

export default Navbar;
