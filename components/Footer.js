import footerStyles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <ul className={footerStyles.components}>
                    <li>
                        &copy; 2021 dan bae
                    </li>
                    <div className={footerStyles.components}>
                        <li><a>resume</a></li>
                        <li><a>linkedin</a></li>
                        <li><a>github</a></li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
