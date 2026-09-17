import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.copy}>&copy; {new Date().getFullYear()} Sedef Sert</p>
  </footer>
);

export default Footer;
