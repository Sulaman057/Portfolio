"use client"
import styles1 from "@/app/pagestheme.module.scss"
import styles from "./contact.module.scss"
import { useState } from "react";
import { BiArrowBack } from 'react-icons/bi';
import Link from "next/link";

const FORM_ENDPOINT = "https://formspree.io/f/xvoneqde";

const Contact =  () => {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
      <div className={styles1.outerdiv}>
        <Link href="/" className={styles1.btnlink}><BiArrowBack className={styles1.backArrow} /></Link>
        <div className={styles1.innerdiv}>
          <h2>Thank you!</h2>
          <p>I'll be in touch soon.</p>
        </div>
      </div>
      </>
    );
  }

  return (
      <div className={styles1.outerdiv}>
        <Link href="/" className={styles1.btnlink}><BiArrowBack className={styles1.backArrow} /></Link>
        <div className={styles1.innerdiv}>
          <h2>Contact</h2>
          <p>You can leave your message here.</p>
          <div className={styles.formDiv}>
            <form
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              className={styles.form}
              >
              <div  className={styles.inputDiv} >
                <input className={[styles.nameInput, styles.input].join("")}  type="text" placeholder="Your name" name="name" autoComplete="off" required />
                <input className={[styles.emailInput, styles.input].join(" ")}  type="email" placeholder="Email" name="email" autoComplete="off" required />
                <textarea className={[styles.messageInput, styles.input].join(" ")} cols={40} rows={8}  placeholder="Your message" name="message" required />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Contact;
