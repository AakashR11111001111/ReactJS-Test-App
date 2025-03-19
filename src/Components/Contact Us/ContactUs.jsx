import styles from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.heading}>Contact Us</h1>
            <form className={styles.form}>
                <input type="text" placeholder="Your Name" className={styles.input} />
                <input type="email" placeholder="Your Email" className={styles.input} />
                <textarea placeholder="Your Message" className={styles.textarea}></textarea>
                <button type="submit" className={styles.button}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
