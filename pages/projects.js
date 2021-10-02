import Image from 'next/image'
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
                <div className={projectStyles.card1}>
                    <Image src={projectSportsTweets} alt="sports-tweets" />
                    <h1>Project Sports Tweets</h1>
                </div>
                <div className={projectStyles.card2}>
                <Image src={wayfarer} alt="project-wayfarer" />
                    <h1>Project Wayfarer</h1>
                </div>
                <div className={projectStyles.card3}>
                <Image src={badApple} alt="bad apple movies" />
                    <h1>Bad Apple Movies</h1>
                </div>
                <div className={projectStyles.card4}>
                <Image src={load} alt="project-l.o.a.d." />
                    <h1>Project L.O.A.D</h1>
                </div>
            </div>
        </>
    )
}

export default projects
