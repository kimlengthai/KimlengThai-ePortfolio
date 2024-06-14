import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I&apos;m Kimleng Thai!</h1>
    <p className={styles.description}>I love to build things and I like coding.</p>
    <a href="mailto:kimleng.ngs@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src="../../../assets/profile/profilePicture.jpeg" alt="My profile image" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
    </section>
  )
}
