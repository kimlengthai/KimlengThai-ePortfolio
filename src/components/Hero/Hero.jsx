import styles from './Hero.module.css';
import profilePicture from '/assets/profile/profilePicture.jpeg';

export const Hero = () => {
  return (
    <>
      <header className={styles.container} aria-label="Introduction">
        <div className={styles.content}>
          <h1 className={styles.title}>Hey there, I&apos;m Kimleng Thai!</h1>
          <p className={styles.description}> 
            A final-year student studying Software Engineering at UTS.
            I enjoy solving problems and learning new technologies, which is why I chose this field.
          </p>
          <p className={styles.description}>
            Outside of coding and uni, I enjoy playing Football, watching NBA, and listening to podcasts.
          </p>
          <a href="mailto:kimleng.ngs@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
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