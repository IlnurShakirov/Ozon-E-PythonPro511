import styles from './Header.module.css'
const API_URL = import.meta.env.VITE_API_URL

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      {logo && <img src={`${API_URL}/${logo}`} alt="Logo" className={styles.logoImg} />}
      <span>Магазин техники</span>
    </header>
  )
}

export default Header;
