import Meta from '../../components/Meta'

import projectPageStyles from '../../styles/projectPages.module.scss'

const sportsTweets = () => {
    return (
        <>
            <Meta title='Sports Tweets' />
            <div className={projectPageStyles.container}>
                <div className={projectPageStyles.col1}>
                    <h1>One stop shop</h1>
                    <h1>for sports news</h1>
                </div>
                <div className={projectPageStyles.col2}>
                    <p>Sports Tweets was my capstone project for my time at General Assembly. The idea came to me from a friend who wanted up to date news for his favorite sports. Powered by Twitter, I created Sports Tweets to stream the latest tweets depending on the user's choice of sport.</p>
                </div>
            </div>
        </>
    )
}

export default sportsTweets
