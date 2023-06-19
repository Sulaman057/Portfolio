import Image from "next/image"
import styles from "../styles/hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.heroSec}>
    <div className={styles.intro}>
      <h1>Sulaman Asghar</h1>
      <h2>Frontend Developer</h2>
      <p>Frontend developer with a passion for creating beautiful and functional user interfaces. Based in Lahore, Pakistan</p>
    </div>
    <Image src="/imgs/sulaman057.png" width={575} height={575} alt="sulaman" />
    </div>
  )
}

export default Hero
