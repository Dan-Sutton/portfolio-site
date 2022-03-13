import React, { useState } from "react";
import projectImages from "./projectImages.module.css";
import BasicModal from "./ImageModal";

export default function ProjectImages({ imgSrc, info, title, link1, link2 }) {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);

  return (
    <div className={projectImages.container}>
      <div>
        <img
          className={projectImages.hvrgrow}
          src={imgSrc}
          alt={"Project showcase"}
          onMouseEnter={() => {
            setMore(true);
          }}
          onMouseLeave={() => {
            setMore(false);
          }}
          onClick={() => {
            setOpen(true);
          }}
        ></img>

        {more ? (
          <h1 className={projectImages.title}>Click for more info</h1>
        ) : (
          <h1 className={projectImages.title}>{title}</h1>
        )}
      </div>
      <BasicModal
        open={open}
        setOpen={setOpen}
        title={title}
        info={info}
        link1={link1}
        link2={link2}
      />
    </div>
  );
}
