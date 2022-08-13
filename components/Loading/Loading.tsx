import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <section>
            <div className={styles.loadingMarker}>
                <img src="static/images/spinner.png" alt="spinner" width="64" height="64"/>
                {/*<div className={styles.loadingMarkerSettings}></div>*/}
            </div>
        </section>
    )
}

export default Loading;