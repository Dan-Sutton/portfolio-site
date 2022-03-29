import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modal from "./modal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "rgba(255, 255, 255, .2)",
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {info}
          </Typography>
          <div>
            <a href={link1.link} target="_blank" rel="noreferrer">
              {link1.title}
            </a>
            <br />
            <a href={link2.link} target="_blank" rel="noreferrer">
              {link2.title}
            </a>
          </div>

          <div className={modal.imgcontainer}>
            <img src={img2} style={{ height: "100%", width: "auto" }}></img>
            <img src={img3} style={{ height: "100%", width: "auto" }}></img>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
