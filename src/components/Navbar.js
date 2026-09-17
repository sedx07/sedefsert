import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${styles.navLink} ${active === id ? styles.navLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleClick(id); }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.mobileLink} ${active === id ? styles.mobileLinkActive : ''}`}
            onClick={(e) => { e.preventDefault(); handleClick(id); }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
