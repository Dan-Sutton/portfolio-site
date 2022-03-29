import project from "./projects.module.css";
import Icons from "../Icons";
import { motion } from "framer-motion";
import ProjectImages from "./ProjectImages";
import { projectsData } from "../../data/data.js";

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
        <div className={project.icons}>
          <Icons />
        </div>
      </div>

      <div className={project.images}>
        {projectsData.map((item) => {
          return (
            <ProjectImages
              imgSrc={item.image}
              title={item.title}
              info={item.info}
              link1={item.link1}
              link2={item.link2}
              img2={item.image2}
              img3={item.image3}

            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
