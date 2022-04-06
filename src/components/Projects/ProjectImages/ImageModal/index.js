import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modal from "./modal.module.css";

const style = {
  outline: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "70vh",
  bgcolor: "rgba(255, 255, 255, .2)",
  overflow: "auto",
  backdropFilter: " blur(10px)",
  p: 4,
  borderRadius: "24px",
};

export default function BasicModal({
  open,
  setOpen,
  title,
  info,
  link1,
  link2,
  img2,
  img3,
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            color={"white"}
            fontWeight={"bold"}
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            color={"white"}
            fontSize={"130%"}
            fontWeight={"bold"}
            lineHeight={"3vh"}
            marginBottom={"3vh"}
            backgroundColor={"rgba(36,36,39,.5)"}
            padding={"2%"}
            borderRadius={"20px"}
          >
            {info}
          </Typography>
          <div className={modal.links}>
            <a
              className={modal.anchor}
              href={link1.link}
              target="_blank"
              rel="noreferrer"
            >
              {link1.title}
            </a>
            <br />
            <a
              className={modal.anchor}
              href={link2.link}
              target="_blank"
              rel="noreferrer"
            >
              {link2.title}
            </a>
          </div>

          <div className={modal.imgcontainer}>
            <img
              className={modal.img}
              src={img2}
              alt="project thumbnail"
              onClick={() => {
                window.open(img2);
              }}
            ></img>
            <img
              className={modal.img}
              src={img3}
              alt="project thumbnail"
              onClick={() => {
                window.open(img3);
              }}
            ></img>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
