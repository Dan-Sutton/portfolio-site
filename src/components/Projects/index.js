import project from "./projects.module.css";
import Icons from "../Icons";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className={project.project}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, duration: 5 }}
    >
      <div className={project.projecthead}>
        <h1 className={project.title}>Projects</h1>
        <Icons className={project.icons} />
      </div>
    </motion.div>
  );
}

export default Projects;
