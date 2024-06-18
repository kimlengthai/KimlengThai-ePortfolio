import styles from './Hero.module.css';
import profilePicture from '/assets/profile/profilePicture.jpeg';

export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I&apos;m Kimleng Thai!</h1>
    <p className={styles.description}>I love to build things and I like coding.</p>
    <a href="mailto:kimleng.ngs@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={profilePicture} alt="My profile image" className={styles.heroImg} />
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
    
    <div className={styles.navigation}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
    </div>

    </section>
  )
}
