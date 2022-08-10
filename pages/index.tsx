import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sezer Tetik</title>
                <meta name="description" content="Sezer Tetik portfolio website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.bg}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        I will be back <span>soon!</span>
                    </h1>
                    <div className={styles.socials}>
                        <a href="https://github.com/sezRR" target="_blank" rel="noreferrer">
                            <picture>
                                <img className={styles.social} src="/static/images/github.svg" alt="github-logo"/>
                            </picture>
                        </a>
                        <a href="https://linkedin.com/in/sezertetik" target="_blank" rel="noreferrer">
                            <picture>
                                <img className={styles.social} src="/static/images/linkedin.svg" alt="linkedin-logo"/>
                            </picture>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <button className={styles.email}>
                            <a href="mailto:me@sezertetik.dev">Mail to me</a>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home
