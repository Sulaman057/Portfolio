import styles from './page.module.scss'
import Header from './components&styles/components/Header'
import Hero from './components&styles/components/Hero'
import AboutSec from './components&styles/components/AboutSec'
import SkillsSec from './components&styles/components/SkillsSec'
import PortfolioSec from './components&styles/components/PortfolioSec'
import Footer from './components&styles/components/Footer'

export default async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <main>
        <AboutSec />
        <SkillsSec />
        <PortfolioSec />
      </main>
      <Footer />
    </div>
  )
}
