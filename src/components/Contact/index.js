import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "./contact.module.css";
import { motion } from "framer-motion";
import Icons from "../Icons";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bi92ooh",
        "template_9svg0xj",
        form.current,
        "suyF1hovouBQ6pKpd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <motion.div
      className={contact.body}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, duration: 5 }}
    >
      <div className={contact.contacthead}>
        <h1 className={contact.title}>Contact</h1>
        <div className={contact.icons}>
          <Icons />
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className={contact.form}>
        <input type="text" name="user_name" placeholder="Your name" />
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email Address"
        />
        <br />
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send" className={contact.submit} />
      </form>
    </motion.div>
  );
};

export default Contact;
