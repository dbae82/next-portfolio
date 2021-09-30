import Link from 'next/link'
import Image from 'next/image'

import navStyles from '../styles/Nav.module.scss'
import logo from '../assets/logo-dark.png'

const Nav = () => {
    return (
        <nav>
            <ul className={navStyles.components}>
                <li>
                    <Link href='/'><a><Image src={logo} alt='logo' /></a></Link>
                </li>
                <div className={navStyles.components}>
                    <li>
                        <Link href='projects'>projects</Link>
                    </li>
                    <li>
                        <Link href='about'>about</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
