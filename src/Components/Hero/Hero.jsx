
import styles from './Hero.module.css';
const Hero = ( {onGetStartedClick} ) => { 

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.heroInner}>
                    <h1 className={styles.head}>Welcome to our page</h1>
                    <p className={styles.subhead}>We provide the best services</p>
                    <button onClick={onGetStartedClick} className={styles.btn}>Get Started</button>
                </div>
            </div>

        </>
    )
}

export default Hero;