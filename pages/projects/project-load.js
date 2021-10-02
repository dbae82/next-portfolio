import Meta from '../../components/Meta'

import projectPageStyles from '../../styles/projectPages.module.scss'

const projectLoad = () => {
    return (
        <>
            <Meta title='Project L.O.A.D.' />
            <div className={projectPageStyles.container}>
                <h1>Project L.O.A.D.</h1>
            </div>
        </>
    )
}

export default projectLoad
