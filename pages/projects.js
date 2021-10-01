import Meta from '../components/Meta'

import projectStyles from '../styles/projects.module.scss'

const projects = () => {
    return (
        <div className={projectStyles.container}>
            <Meta title='Projects' />
            <h1>Projects</h1>
        </div>
    )
}

export default projects
