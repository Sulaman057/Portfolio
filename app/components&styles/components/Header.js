"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/header.module.scss"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

  const navRef = useRef();
  const handleClick = () => {
    navRef.current.classList.toggle(
      styles.responsiveNav
    );
  };

  return (
    <header className={styles.header} >
      <div className={styles.forMob}>
      <Link href="/" className={styles.logo} >
            <Image 
              src="/imgs/logo.png"
              width={163}
              height={30}
              alt='logo'
            />
        </Link>
        <button onClick={handleClick} className={[styles.navOpenBtn, styles.navBtn].join(" ")} ><FaBars/></button>
      </div>

        <nav ref={navRef} >
          <button onClick={handleClick} className={[styles.navcloseBtn, styles.navBtn].join(" ")} ><FaTimes/></button>
          <ul>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
