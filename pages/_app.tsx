import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Sezer Tetik</title>
                <meta name="description" content="Sezer Tetik's portfolio website"/>
                <link rel="icon" href="/static/images/favicon.ico"/>
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
