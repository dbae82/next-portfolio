import Link from 'next/link'
import Image from 'next/image'

import navStyles from '../styles/Nav.module.scss'
import logo from '../assets/logo-dark.png'

const Nav = () => {
    return (
        <nav>
            <ul className={navStyles.navComponents}>
                <li>
                    <Link href='/'><a><Image src={logo} alt='logo' /></a></Link>
                </li>
                <li>
                    <Link href='projects'>Projects</Link>
                </li>
                <li>
                    <Link href='about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
