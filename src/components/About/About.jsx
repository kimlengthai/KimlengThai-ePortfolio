import styles from './About.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>Welcome to my page!</h2>
      <div className={styles.aboutContent}>
        <div className={styles.infoBox}>
          <img
            src="../../../assets/standup/standupImg.png"
            alt="My standard picture"
            className={styles.aboutImage}
          />
          <div className={styles.aboutInfo}>
            <h3 className={styles.name}>Kimleng Thai</h3>
            <p><strong>University of Technology Sydney</strong></p>
            <ul>
              <li>Bachelor of Engineering</li>
              <li>Major in Software Engineering</li>
              <li>Feb 2022 - June 2026 (Expected)</li>
              <li>I love to build things and solve problems</li>
              <li>Maths tutor at Ezy Math Tutoring</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <a href="mailto:kimleng.ngs@gmail.com" className={styles.contactButton}>
          <MailOutlineIcon className={styles.icon} />
          Contact me
        </a>
        <a href="https://www.linkedin.com/in/kimlengthai/" className={styles.connectButton} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className={styles.icon} />
          Connect with me
        </a>
      </div>
      <div className={styles.navigation}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.icons}>
        <a href="https://github.com/kimlengthai" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/kimlengthai/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
    </section>
  );
}

export default About;