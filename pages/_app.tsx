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

                <style>
                    @import url(&quot;https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap&quot;);
                </style>
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
