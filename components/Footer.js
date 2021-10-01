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
                        <li><a href='/resume.pdf' target='_blank'>resume</a></li>
                        <li><a href='https://www.linkedin.com/in/dan-bae/' target='_blank'>linkedin</a></li>
                        <li><a href='https://github.com/dbae82' target='_blank'>github</a></li>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
