import project from "./projects.module.css";
import Icons from "../Icons";

function Projects() {
  return (
    <div>
      <h1 className={project.title}>Projects</h1>
      <Icons />
    </div>
  );
}

export default Projects;
