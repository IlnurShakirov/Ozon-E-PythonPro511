import styles from './Footer.module.css';

// Принимаем copyright, как передаем в App
const Footer = ({ copyright }) => {
  return (
    <footer className={styles.footer}>
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
