import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, intial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Dan Bae',
    keywords: 'portfolio, frontend web development, software engineering',
    description: 'Check out my portfolio focusing on frontend web development',
}

export default Meta
