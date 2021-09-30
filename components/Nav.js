import Link from 'next/link'
import Image from 'next/image'

import navStyles from '../styles/Nav.module.scss'
import logo from '../assets/logo-dark.png'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.container}>
                <ul className={navStyles.components}>
                    <li>
                        <Link href='/'><a><Image src={logo} alt='logo' /></a></Link>
                    </li>
                    <div className={`${navStyles.components} ${navStyles.navLinks}`}>
                        <li>
                            <Link href='projects' id='nav-link'>projects</Link>
                        </li>
                        <li>
                            <Link href='about' id='nav-link'>about</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
