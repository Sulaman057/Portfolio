import PagesNav from "../components&styles/components/PagesNav";
import styles0 from "@/app/pagestheme.module.scss"
import CardSec from "./CardSec";
import { BiArrowBack } from 'react-icons/bi';
import Link from "next/link";

export default async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
      <div className={styles0.outerdiv}>
        <PagesNav />
        <div className={styles0.innerdiv}>
          <h2>Projects</h2>
          <p>Here are some notable projects I have worked on:</p>
          <CardSec/>
        </div>
      </div>
  )
}
