import styles from "@/app/pagestheme.module.scss"
import styles1 from "./skills.module.scss"
import { SiHtml5, SiFigma, SiRedux, SiAxios, SiVite, SiStyledcomponents, SiNextdotjs, SiCss3, SiSass, SiJavascript, SiReact } from 'react-icons/si';
import { BiArrowBack } from 'react-icons/bi';
import Link from "next/link";

export default async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
      <div className={styles.outerdiv}>
        <Link href="/" className={styles.btnlink}><BiArrowBack className={styles.backArrow} /></Link>
        <div className={styles.innerdiv}>
          <h2>Skill Set</h2>
          <p>I am constantly staying updated with the latest developments in frontend technologies and best practices. I have a strong understanding of responsive design principles and cross-browser compatibility to ensure that websites are accessible and efficient.</p>
          <div className={styles1.icondiv}>
            <SiHtml5 className={styles1.icon} />
            <SiCss3 className={styles1.icon} />
            <SiSass className={styles1.icon} />
            <SiStyledcomponents className={styles1.icon} />
            <SiJavascript className={styles1.icon} />
            <SiReact className={styles1.icon} />
            <SiNextdotjs className={styles1.icon} />
            <SiVite className={styles1.icon} />
            <SiAxios className={styles1.icon} />
            <SiRedux className={styles1.icon} />
            <SiFigma className={styles1.icon} />
          </div>
          <div className={styles.horizontalRule} />
          <p>My technical skills include:</p>
          <ul className={styles1.list}>
            <li><b>HTML:</b> I have a strong command of HTML and utilize its semantic structure to create well-organized and accessible web pages.</li>
            <li><b>CSS/SCSS:</b> I am proficient in CSS and SCSS, allowing me to style websites with precision and create visually appealing user interfaces.</li>
            <li><b>Styled Components:</b> I have experience using Styled Components, a popular CSS-in-JS library, to encapsulate styles and build reusable UI components.</li>
            <li><b>JavaScript:</b> I am highly proficient in JavaScript and use it to add interactivity and dynamic functionality to websites, ensuring a seamless user experience.</li>
            <li><b>React & Next.js:</b> I have extensive experience working with React and Next.js, leveraging their powerful capabilities to build scalable and performant web applications.</li>
            <li><b>API Integration:</b> I also have worked with APIs, utilizing technologies like Axios and the Fetch API to retrieve and manipulate data from external sources, providing dynamic content to users.</li>
            <li><b>Redux Toolkit:</b> I employ Redux Toolkit to efficiently manage state within my applications, enabling smooth data flow and robust state management.</li>
            <li><b>Figma:</b> I utilize Figma, a powerful design tool, to create visually stunning and intuitive user interfaces. Figma allows me to collaborate with designers, iterate quickly, and ensure pixel-perfect designs.</li>
          </ul>
          {/* <div className={styles.horizontalRule} /> */}

        </div>
      </div>
  )
}
