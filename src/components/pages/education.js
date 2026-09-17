import React from 'react';
import styles from './Education.module.css';

const education = [
  {
    degree: 'MSc',
    field: 'Computer Engineering',
    school: 'Manisa Celal Bayar University',
    year: 'Expected Feb 2027',
    focus: 'Artificial Intelligence',
    current: true,
  },
  {
    degree: 'BSc',
    field: 'Computer Engineering',
    school: 'Manisa Celal Bayar University',
    year: '2016 – 2021',
    focus: null,
    current: false,
  },
];

const Education = () => (
  <section className={styles.education} id="education">
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className="section-title">Education</h2>
        <div className="section-line" style={{ margin: '0 auto 1rem' }} />
      </div>

      <div className={styles.cards}>
        {education.map((e, i) => (
          <div className={`${styles.card} ${e.current ? styles.cardCurrent : ''}`} key={i}>
            <span className={`${styles.degree} ${e.current ? styles.degreeCurrent : ''}`}>{e.degree}</span>
            <h3 className={styles.field}>{e.field}</h3>
            <p className={styles.school}>{e.school}</p>
            <p className={styles.year}>{e.year}</p>
            {e.focus && <span className={styles.focus}>{e.focus}</span>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
