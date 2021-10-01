
import Image from 'next/image'

import styles from '../styles/Home.module.scss'
import memoji from '../assets/profile-portrait.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello 👋 I'm Dan</h1>
        <h4>I'm a Front-End Web Developer based out of Houston, Texas.</h4>
      </div>
      <div>
        <Image className={styles.portrait} src={memoji} alt='profile-pic' />
      </div>
    </div>
  )
}
