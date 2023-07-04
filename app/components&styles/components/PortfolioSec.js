import styles from "../styles/portfolioSec.module.scss"
import Link from "next/link"

const PortfolioSec = () => {
  return (
    <div className={styles.psec}>
      <h2>My work</h2>
      <div className={styles.pcards}>
         <div className={[styles.pcard1, styles.pcard].join(" ")}>
            <div className={styles.pcardcontent}>
               <h3>ViiEes web</h3>
               <p>React & styled-component</p>
               <div className={styles.divider}/>
               <p>This project, I have created for ViiEes production by using React js and styled-components for styling</p>
               <Link href="/projects/viiees"><button>See more</button></Link>
            </div>
         </div>
         <div className={[styles.pcard2, styles.pcard].join(" ")}>
            <div className={styles.pcardcontent}>
               <h3>Current site</h3>
               <p>Nextjs & SCSS</p>
               <div className={styles.divider}/>
               <p>That's the current project, I created this to showcase my portfolio by using Nextjs and sass/scss for styling</p>
               <Link href="/projects/current"><button>See more</button></Link>
            </div>
         </div>
         <div className={[styles.pcard3, styles.pcard].join(" ")}>
            <div className={styles.pcardcontent}>
               <h3>Form validation</h3>
               <p>Nextjs, Tailwind, formik & yup</p>
               <div className={styles.divider}/>
               <p>Motive of this project is to practice form validations. In this project i've use formik and yup </p>
               <Link href="/projects/form-validation"><button>See more</button></Link>
            </div>
         </div>
      </div>
    </div>
  )
}
export default PortfolioSec
