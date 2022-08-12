import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <section>
            <div className={styles.loadingMarker}>
                <div className={styles.loadingMarkerSettings}></div>
            </div>
        </section>
    )
}

export default Loading;