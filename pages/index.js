
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'
import memoji from '../assets/profile-portrait.jpeg'
import projectSportsTweets from '../assets/sports-tweets.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello 👋 I'm Dan</h1>
        <h4>I'm a Front-End Web Developer based out of Houston, Texas.</h4>
        <br />
        <p>Check out my latest project.</p>
        <br />
        <div className={styles.card}>
          <Link href='projects/sports-tweets'>
            <a>
              <div>
                <Image src={projectSportsTweets} alt="sports-tweets" />
                <h2>Project Sports Tweets</h2>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <Image className={styles.portrait} src={memoji} alt='profile-pic' />
      </div>
    </div>
  )
}
