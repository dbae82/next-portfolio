import Meta from '../../components/Meta'

import projectPageStyles from '../../styles/projectPages.module.scss'

const badAppleMovies = () => {
    return (
        <>
            <Meta title='Bad Apple Movies' />
            <div className={projectPageStyles.container}>
                <h1>Bad Apple Movies</h1>
            </div>
        </>
    )
}

export default badAppleMovies
