import Meta from '../../components/Meta'

import projectPageStyles from '../../styles/projectPages.module.scss'

const projectWayfarer = () => {
    return (
        <>
            <Meta title='Project Wayfarer' />
            <div className={projectPageStyles.container}>
                <h1>Project Wayfarer</h1>
            </div>
        </>
    )
}

export default projectWayfarer
