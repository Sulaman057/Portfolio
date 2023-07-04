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
              <h2>Form Validation Project</h2>
              <p>
                This project is a web application built with Next.js, Formik, and Yup to provide form validation functionality. It allows users to submit a form with various fields while ensuring the accuracy and integrity of the entered data. The form includes validations for name, email, date of birth, checkboxes, radio buttons, and a dropdown for country selection. It also features responsive design for optimal user experience across different devices.
              </p>
              <h3>Features</h3>
              <ul>
                <li><strong>Name Validation:</strong> The name field is limited to a maximum of 20 characters to ensure proper input length.</li>
                <li><strong>Email Validation:</strong> The email field enforces a valid email format to prevent incorrect entries.</li>
                <li><strong>Date of Birth (DOB) Validation:</strong> The calendar field captures the user's date of birth. If the user is under 18 years old, an error message is displayed, indicating that they must be at least 18 years old to submit the form.</li>
                <li><strong>Checkbox Validation:</strong> Users must check the terms and conditions and privacy policy checkboxes to proceed with form submission.</li>
                <li><strong>Radio Buttons for Gender Selection:</strong> Radio buttons provide an intuitive interface for users to select their gender.</li>
                <li><strong>Dropdown for Country Selection:</strong> A dropdown menu allows users to select their country from a predefined list, ensuring accurate data capture.</li>
                <li><strong>Error Handling:</strong> Empty fields or inputs that do not meet validation criteria trigger appropriate error messages.</li>
              </ul>
              <h3>Live Project</h3>
              <p>Check out the live project <a href="https://form-validation-bysulaman.vercel.app/" target="_blank">here</a>.</p>
              <h3>GitHub Repository</h3>
              <p>Find the project's GitHub repository <a href="https://github.com/Sulaman057/form_project_" target="_blank">here</a>.</p>
            </div>
            <div className={[styles.ppInnerdivs, styles.ppImg].join(" ")} >
              <Image 
                src="/imgs/form.jpg"
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
