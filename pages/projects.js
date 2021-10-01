import Meta from '../components/Meta'

import projectStyles from '../styles/projects.module.scss'

const projects = () => {
    return (
        <>
            <Meta title='Projects' />
            <div className={projectStyles.container}>
                <div className={projectStyles.card1}>
                    <h1>Project Sports Tweets</h1>
                </div>
                <div className={projectStyles.card2}>
                    <h1>Project Wayfarer</h1>
                </div>
                <div className={projectStyles.card3}>
                    <h1>Bad Apple Movies</h1>
                </div>
                <div className={projectStyles.card4}>
                    <h1>Project L.O.A.D</h1>
                </div>
            </div>
        </>
    )
}

export default projects
