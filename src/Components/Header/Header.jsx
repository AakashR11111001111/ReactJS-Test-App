import styles from './Header.module.css';
const Header = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.head}>Logo</h1>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Header;