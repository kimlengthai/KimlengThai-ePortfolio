import styles from './About.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2>Welcome to my page!</h2>
      <div className={styles.aboutContent}>
        <img
          src="../../../assets/standup/standupImg.png"
          alt="My standard picture"
          className={styles.aboutImage}
        />
        <p className={styles.introText}>About Me</p>
        <p className={styles.aboutText}>I am a software engineering student at the University of Technology Sydney, I
        passionate about learning new skills and undertaking new projects. I constantly seek opportunities to enhance 
        my expertise and contribute to impactful solutions. Through various projects, I have demonstrated my passion 
        for problem-solving and my skill in front-end development. My hobbies include playing sports and traveling. 
        I have proven myself to have excellent communication and teamwork skills, enjoying meaningful conversations 
        that contribute to a positive and collaborative environment.
        </p>
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
      </div>
    </section>
  );
}

export default About;
