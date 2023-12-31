import styles1 from "./portfolio.module.scss"
import Link from "next/link"

const CardSec = () => {
  return (
      <div className={styles1.pcards}>
         <div className={[styles1.pcard1, styles1.pcard].join(" ")}>
            <div className={styles1.pcardcontent}>
               <h3>ViiEes web</h3>
               <p>React & styled-component</p>
               <div className={styles1.divider}/>
               <p>This project, I have created for ViiEes production by using React js and styled-components for styling</p>
               <Link href="/projects/viiees"><button>See more</button></Link>
            </div>
         </div>
         <div className={[styles1.pcard2, styles1.pcard].join(" ")}>
            <div className={styles1.pcardcontent}>
               <h3>My portfolio</h3>
               <p>Nextjs & SCSS</p>
               <div className={styles1.divider}/>
               <p>That's the current project, I created this to showcase my portfolio by using Nextjs and sass/scss for styling</p>
               <Link href="/projects/current"><button>See more</button></Link>
            </div>
         </div>
         <div className={[styles1.pcard3, styles1.pcard].join(" ")}>
            <div className={styles1.pcardcontent}>
               <h3>Form validation</h3>
               <p>Nextjs, Tailwind, formik & yup</p>
               <div className={styles1.divider}/>
               <p>Motive of this project is to practice form validations. In this project i've use formik and yup</p>
               <Link href="/projects/form-validation"><button>See more</button></Link>
            </div>
         </div>
      </div>

  )
}

export default CardSec
