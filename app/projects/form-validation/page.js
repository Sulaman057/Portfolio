import Link from 'next/link'
import styles from "@/app/page.module.scss"

export default function NotFound() {
  return (
    <div className={styles.notFound}>
        <div>
          <h2>Coming Soon</h2>
          <p>It will be a form vailation project</p>
          <p>
            View <Link href="/"><u>Home</u></Link>
          </p>
        </div>
    </div>
  )
}
