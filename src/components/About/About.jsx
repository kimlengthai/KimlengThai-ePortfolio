import styles from './About.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import standupImg from '/assets/standup/standupImg.png';

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.aboutContent}>
        <div className={styles.infoBox}>
          <img
            src={standupImg}
            alt="Kimleng Thai portrait"
            className={styles.aboutImage}
          />

          <div className={styles.aboutInfo}>
            <h3 className={styles.name}>Kimleng Thai</h3>

            <p className={styles.subtitle}>
              Junior Software Engineer at ViCyber
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>1+ Year</span>
                <span className={styles.statLabel}>Software Experience</span>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statValue}>React</span>
                <span className={styles.statLabel}>Frontend Focus</span>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statValue}>AWS</span>
                <span className={styles.statLabel}>Cloud Exposure</span>
              </div>

              <div className={styles.statCard}>
                <span className={styles.statValue}>2025</span>
                <span className={styles.statLabel}>UTS Graduate</span>
              </div>
            </div>

            <p className={styles.description}>
              I am a Software Engineering graduate from the University of Technology Sydney
              and currently work as a Junior Software Engineer at ViCyber. My experience
              focuses on designing and building modern user interfaces, primarily with
              React, while also contributing to selected backend features and cloud based
              solutions using Python and AWS.
            </p>

            <p className={styles.description}>
              Across my roles in industry and academia, I have developed a strong foundation
              in software engineering, problem solving, and communication. In addition to my
              current role, I have worked as a Software Engineer Intern at ViCyber, a Software
              Developer Intern at Sharing Minds, and a Mathematics Tutor at the University of
              Technology Sydney.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightLabel}>Education</span>
                <span className={styles.highlightValue}>
                  Bachelor of Engineering (Honours), Software Engineering
                </span>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightLabel}>University</span>
                <span className={styles.highlightValue}>
                  University of Technology Sydney
                </span>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightLabel}>Current Role</span>
                <span className={styles.highlightValue}>
                  Junior Software Engineer at ViCyber
                </span>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightLabel}>Previous Roles</span>
                <span className={styles.highlightValue}>
                  Software Developer Intern, Software Engineer Intern, Mathematics Tutor
                </span>
              </div>
            </div>
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
          Contact Me
        </a>

        <a
          href="https://www.linkedin.com/in/kimlengthai/"
          className={styles.connectButton}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Kimleng Thai LinkedIn profile"
        >
          <LinkedInIcon className={styles.icon} />
          Connect on LinkedIn
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
        <a
          href="https://github.com/kimlengthai"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/kimlengthai/"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </section>
  );
};

export default About;