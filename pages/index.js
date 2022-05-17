// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/navbar/Header'
// import Footer from '../components/navbar/Footer'
import SkillList from '../components/SkillList';

export default function Home(props) {
  console.log(props);

  return (
    <>
      <Header title="Next Basic" />
      <div className={styles.container}>
        <SkillList>
          Skill List
        </SkillList>
      </div>
      {/* <Footer /> */}
    </>
  )
}
