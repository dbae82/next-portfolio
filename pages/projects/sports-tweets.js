import Meta from '../../components/Meta'

import projectPageStyles from '../../styles/projectPages.module.scss'

const sportsTweets = () => {
    return (
        <>
            <Meta title='Sports Tweets' />
            <div className={projectPageStyles.container}>
                <h1>Sports Tweets</h1>
            </div>
        </>
    )
}

export default sportsTweets
