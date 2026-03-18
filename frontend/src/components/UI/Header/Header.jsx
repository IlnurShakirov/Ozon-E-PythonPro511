import styles from './Header.module.css';

// Добавляем пропс title, чтобы Header был динамическим
const Header = ({ title }) => (
  <header className={styles.header}>
    <h1>{title}</h1>
  </header>
);

export default Header;
