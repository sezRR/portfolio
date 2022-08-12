import type {NextPage} from 'next'
import styles from '../styles/LandingPage.module.css'

const LandingPage: NextPage = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.landingContainer}>
                <div className={styles.landingFooter}></div>
                <div className={styles.sidenav}></div>
                <div className={styles.logOutput}></div>
                <div className={styles.centerContent}>
                    <article className={styles.information}>
                        <h6 className={styles.jobSpec}>Software Developer</h6>
                        <h1 className={styles.name}>Sezer Tetik</h1>
                    </article>
                    <section>
                        <div className={styles.loadingMarker}>
                            <div className={styles.loadingMarkerSettings}></div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default LandingPage
