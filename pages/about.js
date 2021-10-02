import Image from 'next/image'
import Meta from "../components/Meta"

import aboutStyles from '../styles/about.module.scss'
import profilePic from '../assets/normal-portrait.jpeg'

const about = () => {
    return (
        <>
            <Meta title='About' />
            <div className={aboutStyles.container}>
                <div className={aboutStyles.col1}>
                    <h1>About Me</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum voluptas facilis, earum provident suscipit repellendus corporis id ipsa, commodi sapiente nulla. Debitis natus quo nihil omnis hic distinctio at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum voluptas facilis, earum provident suscipit repellendus corporis id ipsa, commodi sapiente nulla. Debitis natus quo nihil omnis hic distinctio at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum voluptas facilis, earum provident suscipit repellendus corporis id ipsa, commodi sapiente nulla. Debitis natus quo nihil omnis hic distinctio at?</p>
                </div>
                <div className={aboutStyles.col2}>
                    <Image src={profilePic} alt='profile-pic' />
                </div>
            </div>
        </>
    )
}

export default about
