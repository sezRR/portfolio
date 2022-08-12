import type {NextPage} from 'next'
import styles from '../styles/LoadingPage.module.css'

const LoadingPage: NextPage = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.informationContainer}>
                <h6 className={styles.jobInformation}>Software Developer</h6>
                <header className={styles.information}>Sezer Tetik</header>
                <div className={styles.loadingMarker}>
                    <div className={styles.loadingMarkerSettings}></div>
                </div>
            </div>
        </main>
    )
}

export default LoadingPage
