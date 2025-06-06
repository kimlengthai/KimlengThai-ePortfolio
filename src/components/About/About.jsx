import styles from './About.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import standupImg from '/assets/standup/standupImg.png';

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>Welcome to my page!</h2>
      <div className={styles.aboutContent}>
        <div className={styles.infoBox}>
        <img
          src={standupImg}
          alt="My standard picture"
          className={styles.aboutImage}
        />

          <div className={styles.aboutInfo}>
            <h3 className={styles.name}>Kimleng Thai</h3>
            <p><strong>University of Technology Sydney</strong></p>
            <ul>
              <li>Bachelor of Engineering (Honours)</li>
              <li>Major in Software Engineering</li>
              <li>Feb 2022 - Nov 2025 (Expected)</li>
              <li>Driven to build impactful solutions, tackle complex problems, and explore new technologies to grow as an engineer.</li>
              <li><strong>Casual Academic Tutor</strong> at University of Technology Sydney</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
      <a
        href="mailto:kimleng.ngs@gmail.com"
        className={styles.contactButton}
        aria-label="Send an email to Kimleng Thai"
      >
        <MailOutlineIcon className={styles.icon} />
        Contact me
      </a>

      <a
        href="https://www.linkedin.com/in/kimlengthai/"
        className={styles.connectButton}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Kimleng Thai's LinkedIn profile"
      >
        <LinkedInIcon className={styles.icon} />
        Connect with me
      </a>
    </div>
      <nav className={styles.navigation} aria-label="Secondary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.icons}>
        <a href="https://github.com/kimlengthai" target="_blank" title="GitHub" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/kimlengthai/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
    </section>
  );
}

export default About;