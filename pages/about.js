import Meta from "../components/Meta"

import aboutStyles from '../styles/about.module.scss'

const about = () => {
    return (
        <div className={aboutStyles.container}>
            <Meta title='About' />
            <h1>About Me</h1>
        </div>
    )
}

export default about
