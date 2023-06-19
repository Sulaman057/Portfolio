import styles from "../styles/footer.module.scss"
import Image from "next/image"
import Link from "next/link";
import { IoMdMail } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
    return (
      <footer className={styles.footer} >
        <div className={styles.logoDec}>
        <Image
          src="/imgs/logo.png"
          width={163}
          height={30}
          alt="logo"
        />
        <p>If you liked my work and you need me, I'm ready to talk to you</p>
        </div>
        <div className={styles.cfLinks}>
          <h3 className={styles.cheading}>Contacts</h3>
          <ul className={styles.cLinks}>
            <li className={[styles.link1, styles.link].join(" ")}><Link href="mailto:sulaman.dev@gmail.com" ><IoMdMail className={styles.ficon} /><p>sulaman.dev@gmail.com</p></Link></li>
            <li className={[styles.link2, styles.link].join(" ")}><Link href="tel:+923177251061" ><IoLogoWhatsapp className={styles.ficon} /><p>+923177251061</p></Link></li>
            <li className={[styles.link3, styles.link].join(" ")}><Link href="https://github.com/Sulaman057" target="_blank" ><IoLogoGithub className={styles.ficon} /><p>Sulaman057</p></Link></li>
            <li className={[styles.link4, styles.link].join(" ")} ><Link href="https://www.linkedin.com/in/sulaman057" target="_blank" ><IoLogoLinkedin className={styles.ficon} /><p>bit.ly/43OxfLb</p></Link></li>
          </ul>

        </div>
      </footer>
    )
  }

export default Footer
