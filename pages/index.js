import { useState, useEffect } from 'react'
import Head from 'next/head'
import DistanceEstimation from './sheet/distance_estimation'
import Rings from './sheet/rings'
import styles from '../styles/Home.module.css'

const sheets = {
  'help': {
    'code': 'Escape',
    'element': <div/>
  },
  'distance_estimation': {
    'code': 'KeyD',
    'element': <DistanceEstimation/>
  },
  'rings': {
    'code': 'KeyR',
    'element': <Rings/>
  }
}

export default function Home() {
  const [active, setActive] = useState("help");

  useEffect(() => {
    const handleKeybind = event => {
      const { code } = event;
      const key = Object.keys(sheets).find(key => sheets[key].code === code);
      if (key) {
        setActive(key);
      }
    }

    document.addEventListener("keydown", handleKeybind);
    return () => {
      document.removeEventListener("keydown", handleKeybind);
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>R&dom Seed Glitch&lt;</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {sheets[active].element}

      {/*}
      <footer className={styles.footer}>

      </footer>*/}
    </div>
  )
}
