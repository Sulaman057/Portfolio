"use client"
import Link from "next/link";
import styles from "../styles/pagesnav.module.scss"
import { useRef } from "react";
import { usePathname } from 'next/navigation'
import { BiArrowBack, BiLayer } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { CgUserList } from 'react-icons/cg';
import { TiMessage } from 'react-icons/ti';
import { RiPencilRuler2Fill } from 'react-icons/ri';


const PagesNav = () => {

  const pathname = usePathname()
  const navRef = useRef();
  const handleClick = () => {
    navRef.current.classList.toggle(
      styles.responsiveNav
    );
  };
  return (
    <div className={styles.pagesNav} >
        <div ref={navRef}>
            <div className={styles.arrow} >
            <Link href="" onClick={handleClick} className={styles.btnlink}><BiArrowBack className={styles.backArrow} /></Link>
            </div>
            <div className={styles.navlinks}>
                <div  onClick={handleClick} className={styles.notactive} >
                    <Link href="/" className={styles.btnlink}><HiHome className={styles.backArrow} /></Link>
                </div>
                <div className={pathname === '/about' ? styles.active : styles.notactive }>
                    <Link href="/about" className={styles.btnlink}><CgUserList className={styles.backArrow} /></Link>
                </div>
                <div className={pathname === '/skills' ? styles.active : styles.notactive }>
                    <Link href="/skills" className={styles.btnlink}><RiPencilRuler2Fill className={styles.backArrow} /></Link>
                </div>
                <div className={pathname === '/projects' ? styles.active : styles.notactive }>
                    <Link href="/projects" className={styles.btnlink}><BiLayer className={styles.backArrow} /></Link>
                </div>
                <div className={pathname === '/contact' ? styles.active : styles.notactive }>
                    <Link href="/contact" className={styles.btnlink}><TiMessage className={styles.backArrow} /></Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default PagesNav
