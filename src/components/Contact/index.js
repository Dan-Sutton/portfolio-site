import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "./contact.module.css";

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
    <div className={contact.body}>
      <form ref={form} onSubmit={sendEmail} className={contact.form}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your name" />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email Address"
        />
        <label>Message</label>
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send" className={contact.submit} />
      </form>
    </div>
  );
};

export default Contact;
