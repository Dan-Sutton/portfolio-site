import { useState } from "react";
import projectImages from "./projectImages.module.css";

export default function ProjectImages({ imgSrc, info, title }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={projectImages.container}>
      <div
        className={projectImages.imageDiv}
        onMouseEnter={() => {
          setShowMore(true);
        }}
        onMouseLeave={() => {
          setShowMore(false);
        }}
      >
        {showMore ? (
          <h2
            className={projectImages.showMore}
            onMouseEnter={() => {
              setShowMore(true);
            }}
          >
            Click to find out more
          </h2>
        ) : null}
        <img
          className={projectImages.hvrgrow}
          src={imgSrc}
          alt={"Project showcase"}
        ></img>
      </div>

      <article className={projectImages.article}>
        <h1 className={projectImages.title}>{title}</h1>
        <p className={projectImages.info}>{info}</p>
      </article>
    </div>
  );
}
