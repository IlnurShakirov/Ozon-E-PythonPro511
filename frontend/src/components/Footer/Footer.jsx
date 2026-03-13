import styles from './Footer.module.css';

const Footer = ({ copyright }) => {
  return (
    <footer className={styles.footer}>
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
 