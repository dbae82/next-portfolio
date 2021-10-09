import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'

import projectStyles from '../styles/projects.module.scss'
import projectSportsTweets from '../assets/sports-tweets.png'
import wayfarer from '../assets/project-wayfarer.png'
import badApple from '../assets/badapple.png'
import load from '../assets/load.png'

const projects = () => {
    return (
        <>
            <Meta title='Projects' />
            <div className={projectStyles.container}>
                <Link href='projects/sports-tweets'>
                    <a className={projectStyles.card1}>
                        <div>
                            <Image src={projectSportsTweets} alt="sports-tweets" />
                            <h2>Project Sports Tweets</h2>
                        </div>
                    </a>
                </Link>
                <Link href='projects/project-wayfarer'>
                    <a className={projectStyles.card2}>
                        <div>
                            <Image src={wayfarer} alt="project-wayfarer" />
                            <h2>Project Wayfarer</h2>
                        </div>
                    </a>
                </Link>
                <Link href='projects/bad-apple-movies'>
                    <a className={projectStyles.card3}>
                        <div>
                            <Image src={badApple} alt="bad apple movies" />
                            <h2>Bad Apple Movies</h2>
                        </div>
                    </a>
                </Link>
                <Link href='projects/project-load'>
                    <a className={projectStyles.card4}>
                        <div>
                            <Image src={load} alt="project-l.o.a.d." />
                            <h2>Project L.O.A.D.</h2>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default projects
