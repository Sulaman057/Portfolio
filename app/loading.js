import styles from "@/app/page.module.scss"

const loading = () => {
  return (
    <div className={styles.outerdiv}>
       <div className={styles.loading}>
         <div className={styles.loadingAnimation}>
           <div className={styles.innerdiv0} ></div>
           <div className={styles.innerdiv1} ></div>
           <div className={styles.innerdiv2} ></div>
           <div className={styles.innerdiv3} ></div>
           <div className={styles.innerdiv4} ></div>
           <div className={styles.innerdiv5} ></div>
           <div className={styles.innerdiv6} ></div>
           <div className={styles.innerdiv7} ></div>
         </div>
       </div>
    </div>
  )
}

export default loading
