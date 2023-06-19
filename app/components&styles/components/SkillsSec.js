import styles from "../styles/skillsSec.module.scss"
import { SiHtml5, SiNextdotjs, SiCss3, SiSass, SiJavascript, SiReact } from 'react-icons/si';


const SkillsSec = () => {
  return (
    <div className={styles.skills} >
      <h2>My skills</h2>
      <div className={styles.cardsdiv}>
        <div className={styles.scard} >
          <SiHtml5 className={[styles.html, styles.ticon].join("")} />
          <h4>HTML5</h4>
        </div>
        <div className={styles.scard} >
          <SiCss3 className={[styles.css, styles.ticon].join("")} />
          <h4>CSS3</h4>
        </div>
        <div className={styles.scard} >
          <SiSass className={[styles.sass, styles.ticon].join("")} />
          <h4>SASS</h4>
        </div>
        <div className={styles.scard} >
          <SiJavascript className={[styles.js, styles.ticon].join("")} />
          <h4>JavaScript</h4>
        </div>
        <div className={styles.scard} >
          <SiReact className={[styles.react, styles.ticon].join("")} />
          <h4>React js</h4>
        </div>
        <div className={styles.scard} >
          <SiNextdotjs className={[styles.next, styles.ticon].join("")} />
          <h4>Next js</h4>
        </div>
      </div>

    </div>
  )
}

export default SkillsSec
