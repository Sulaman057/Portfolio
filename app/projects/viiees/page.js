import styles from "../projectPostsTheme.module.scss"
import { BiArrowBack } from 'react-icons/bi';
import Link from "next/link"
import Image from "next/image"

const page = () => {
  return (
      <div className={styles.forBackAndOuterdiv}>
        <div className={styles.backBtn} >
          <Link href="/projects" className={styles.btnlink}><BiArrowBack className={styles.backArrow}/></Link>
        </div>
        <div className={styles.ppOuterdiv} >
            <div className={[styles.ppInnerdivs, styles.ppDescription].join(" ")} >
              <h2>ViiEes Portfolio project</h2>
              <p><b>Description:</b> The Video Editing Company Portfolio Website is a showcase of the services, expertise, and portfolio of a video editing company. The website aims to attract potential clients and demonstrate the company's creativity and technical capabilities in video editing.</p>
              <p><b>Technologies Used:</b><br/><b>- React-js</b> <br/><b>- react-router-dom</b> for routing <br/><b>- styled-components</b> for styling, it also enable me to write css in javaScript </p>
              
            </div>
            <div className={[styles.ppInnerdivs, styles.ppImg].join(" ")} >
              <Image 
                src="/imgs/viiees.jpg"
                width={360}
                height={1425}
                alt='logo'
              />
            </div>
        </div>
     </div>
  )
}

export default page
