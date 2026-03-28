import styles from './Hero.module.css';
import profilePicture from '/assets/profile/profilePicture.jpeg';

export const Hero = () => {
  return (
    <>
      <header className={styles.container} id="home" aria-label="Introduction">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Junior Software Engineer</p>

          <h1 className={styles.title}>Kimleng Thai</h1>

          <p className={styles.description}>
            Software Engineering graduate from the University of Technology Sydney,
            currently working at ViCyber and focused on building clean, modern, and
            user centred web experiences.
          </p>

          <p className={styles.description}>
            My work centres on frontend development with React, while also contributing
            to selected backend and cloud based features using Python and AWS.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>1+ Year</span>
              <span className={styles.statLabel}>Industry Experience</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statValue}>React</span>
              <span className={styles.statLabel}>Frontend Focus</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statValue}>AWS</span>
              <span className={styles.statLabel}>Cloud Exposure</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="mailto:kimleng.ngs@gmail.com" className={styles.contactBtn}>
              Contact Me
            </a>

            <a
              href="#project"
              className={styles.secondaryBtn}
              aria-label="View Kimleng Thai projects"
            >
              View Projects
            </a>
          </div>
        </div>

        <img
          src={profilePicture}
          alt="Kimleng Thai"
          className={styles.heroImg}
          loading="lazy"
          decoding="async"
        />

        <div className={styles.topBlur} aria-hidden="true"></div>
        <div className={styles.bottomBlur} aria-hidden="true"></div>
      </header>

      <nav className={styles.navigation} aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </>
  );
};