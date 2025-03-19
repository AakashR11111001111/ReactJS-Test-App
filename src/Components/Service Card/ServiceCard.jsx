import styles from './ServiceCard.module.css';
const ServiceCard = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
            <button className={styles.btn}>Get Service</button>
        </div>
    );
}

export default ServiceCard;