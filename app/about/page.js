import styles from "@/app/pagestheme.module.scss"
import { BiArrowBack } from 'react-icons/bi';
import Link from "next/link";
export default async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
      <div className={styles.outerdiv}>
        <Link href="/" className={styles.btnlink}><BiArrowBack className={styles.backArrow} /></Link>
        <div className={styles.innerdiv}>
          <h2>About Me</h2>
          <p>Hey, I am Sulaman a <b>frontend developer</b>. Based in Lahore, Pakistan</p>
          <p>About one and half year ago, after completing my bachelor's degree in <b>Computer Science</b> and <b>Mathematics</b>, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills. Now I am developing websites and web applications to order or for myself. </p>
          <div className={styles.horizontalRule} />
          <p>Throughout my academic journey, I acquired a solid foundation in computer science principles, algorithms, and data structures. This knowledge forms the backbone of my problem-solving abilities, enabling me to tackle complex challenges with efficiency and precision.</p>
          <p>What sets me apart is my attention to detail and a keen eye for aesthetics. I understand the importance of creating visually appealing websites that reflect the brand's identity and engage the target audience. Combining my technical expertise with a strong design sense, I strive to create seamless, intuitive user interfaces that captivate and delight users.</p>
          <p>In my free time, I enjoy pursuing various hobbies such as cooking, art, and music. These creative outlets not only bring me joy but also inspire me to think outside the box and approach my work with a fresh perspective.</p>
          <p>I'm excited about the prospect of collaborating with visionary clients and ambitious teams. If you have a project in mind or would like to discuss how I can contribute to your web development needs, please feel free to get in touch.</p>
        </div>
      </div>
  )
}

