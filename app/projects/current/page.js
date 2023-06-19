import styles from "../projectPostsTheme.module.scss"
// import styles0 from ""
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
                <h2>Current project</h2>
                <p><b>Description:</b> This project i have created for myself to demonstrate my skills and portfolio.  </p>
                <p><b>Technologies Used:</b><br/><b>- Next-js </b>13.4 because it provides React Server Components, Nested Routes & Layouts, Simplified Data Fetching.  <br/><b>- SCSS</b> for styling as a develpment tool</p>
              </div>
            <div className={[styles.ppInnerdivs, styles.ppImg].join(" ")} >
              <Image 
                src="/imgs/portfolio.jpg"
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
