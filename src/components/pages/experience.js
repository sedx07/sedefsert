import React from 'react';
import styles from './Experience.module.css';

const journey = [
  {
    year: 'Oct 2024 – Present',
    role: 'Software Specialist',
    company: 'VESTEL',
    location: 'Manisa',
    current: true,
    details: [
      'Built RAG-based and LLM-powered chatbot backends with retrieval and response validation (Python, FastAPI, Azure OpenAI, ChromaDB)',
      'Developed AI assistants on a microservice architecture with multilingual query support (Python, FastAPI, React + TypeScript, Azure OpenAI)',
      'Developed a full-stack project management platform with .NET 8 (Clean Architecture, CQRS) and React + TypeScript',
      'Migrated complex SQL queries to Entity Framework Core and built management UI components in React',
      'Designed Azure DevOps CI/CD pipelines deploying AI projects to Ubuntu servers; managed work with Jira and Azure DevOps using AI coding assistants',
      'Developed validation and ETL tools with configurable business rules, semantic comparison, retry/checkpoint mechanisms, and structured Excel + SQL Server reporting',
      'Delivered automated business processes (RPA) and contributed bug fixes to internal applications',
    ],
  },
  {
    year: 'Oct 2022 – Oct 2024',
    role: 'Software Specialist Asst.',
    company: 'Inci Akü',
    location: 'Manisa',
    current: false,
    details: [
      'Developed enterprise BI reports and data workflows (MSSQL, T-SQL, SQL Server Agent, SAP-ABAP, Power BI)',
      'Improved ETL processes and reporting efficiency for manufacturing and business operations',
      'Built JavaScript-based workflow automations that improved manual processing time by ~50%',
      'Supported the SAP ECC to SAP HANA migration through data analysis, process review, and reporting adaptations',
      'Contributed to mobile project development using Bitbucket for version control',
    ],
  },
  {
    year: 'Mar 2021 – Jun 2021',
    role: 'Intern',
    company: 'SISKON Software Automation',
    location: 'Izmir',
    current: false,
    details: [
      'Developed a Python-based Microsoft Teams chatbot to automate repetitive tasks',
      'Improved SQL stored procedures and contributed to development workflows (Docker, Git)',
    ],
  },
  {
    year: 'Jul 2019 – Aug 2019',
    role: 'Intern',
    company: 'Ministry of Environment and Urbanisation',
    location: 'Ankara',
    current: false,
    details: [
      'Contributed to the development of an online login system using Java and MSSQL',
      'Worked with Maven and MVC architecture in a web application environment',
    ],
  },
];

const Experience = () => (
  <section className={styles.experience} id="experience">
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" style={{ margin: '0 auto 1rem' }} />
      </div>

      <div className={styles.timeline}>
        <div className={styles.roadLine} />
        {journey.map((j, i) => (
          <div className={`${styles.stop} ${j.current ? styles.stopCurrent : ''}`} key={i}>
            <div className={`${styles.dot} ${j.current ? styles.dotCurrent : ''}`} />
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>{j.role}</h3>
                  <p className={styles.company}>{j.company} · {j.location}</p>
                </div>
                <div className={styles.yearSide}>
                  <span className={`${styles.year} ${j.current ? styles.yearCurrent : ''}`}>{j.year}</span>
                  {j.current && <span className={styles.badge}>Current</span>}
                </div>
              </div>
              <div className={styles.detailList}>
                {j.details.map((d, k) => (
                  <div className={styles.detailItem} key={k}>{d}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
