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
                <p>This project i have created for myself to demonstrate my skills and portfolio.  </p>
                <div>
                  
                  <h4>Technologies Used:</h4>
                  <ul>
                    <li><strong>Next-js:</strong> 13.4 because it provides React Server Components, Nested Routes & Layouts, Simplified Data Fetching.</li>
                    <li><strong>SCSS:</strong> for styling as a develpment tool.</li>
                  </ul>
                </div>
                <div>
                  <h4>GitHub Repository:</h4>
                  <p>Find the project's GitHub repository <a href="https://github.com/Sulaman057/Portfolio" target="_blank">here</a>.</p>
                </div>
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
