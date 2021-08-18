import { useState, useEffect } from 'react'
import Head from 'next/head'

import Guide from './guide'
import Triangulation from './sheet/triangulation'
import Rings from './sheet/rings'
import Blind from './sheet/blind'
import Divine from './sheet/divine'

import styles from '../styles/Home.module.css'

const sheets = {
  'help': {
    'code': 'Escape',
    'element': <Guide/>
  },
  'triangulation': {
    'code': 'KeyT',
    'element': <Triangulation/>
  },
  'rings': {
    'code': 'KeyR',
    'element': <Rings/>
  },
  'blind': {
    'code': 'KeyB',
    'element': <Blind/>
  },
  'divine': {
    'code': 'KeyD',
    'element': <Divine/>
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
        <meta name="description" content="a small cheatsheet for rsg speedruns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {sheets[active].element}
    </div>
  )
}
