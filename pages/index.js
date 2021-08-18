import Head from 'next/head'
import DistanceEstimation from './dist_estimation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>R&dom Seed Glitch&lt;</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DistanceEstimation/>

      {/*}
      <footer className={styles.footer}>

      </footer>*/}
    </div>
  )
}