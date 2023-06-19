import Link from 'next/link'
import styles from "@/app/page.module.scss"

export default function NotFound() {
  return (
    <div className={styles.notFound}>
        <div>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <p>
            View <Link href="/"><u>Home</u></Link>
          </p>
        </div>
    </div>
  )
}