import styles from './PricingCard.module.css';

const PricingCard = ({ plan }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{plan.name}</h2>
            <p className={styles.price}>{plan.price}</p>
            <ul className={styles.features}>
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className={styles.btn}>Choose Plan</button>
        </div>
    );
};

export default PricingCard;
