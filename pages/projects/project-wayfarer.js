import Meta from '../../components/Meta'
import Image from 'next/image'

import projectPageStyles from '../../styles/projectPages.module.scss'
import projectGif from '../../assets/project-wayfarer.gif'

const projectWayfarer = () => {
    return (
        <>
            <Meta title='Project Wayfarer' />
            <div className={projectPageStyles.container}>
                <div className={projectPageStyles.col1}>
                    <h1>One stop shop</h1>
                    <h1>for sports news</h1>
                </div>
                <div className={projectPageStyles.col2}>
                    <p>Sports Tweets was my capstone project for my time at General Assembly. The idea came to me from a friend who wanted up to date news for his favorite sports. Powered by Twitter, I created Sports Tweets to stream the latest tweets depending on the user's choice of sport.</p>
                </div>
            </div>
            <div className={projectPageStyles.projectGif}>
                <Image src={projectGif} alt='project-wayfarer' />
            </div>
            <div className={projectPageStyles.container}>
                <div className={projectPageStyles.col1}>
                    <h2>Tech Stack</h2>
                </div>
                <div className={projectPageStyles.col2}>
                    <p>Mongoose, Express, React, Node.js (MERN), MongoDB, Json Web Token</p>
                </div>
            </div>
        </>
    )
}

export default projectWayfarer
