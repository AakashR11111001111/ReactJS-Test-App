import styles from './PeopleCard.module.css';   
const PeopleCard = ({ name, email, phone }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.email}>{email}</p>
            <p className={styles.phone}>{phone}</p>
        </div>
    );
}

export default PeopleCard;