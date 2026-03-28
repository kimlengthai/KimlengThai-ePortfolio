import styles from './Contact.module.css';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactCard}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Get In Touch</p>
          <h2>Contact</h2>
          <p className={styles.description}>
            I am always open to connecting about software engineering, frontend
            development, and new opportunities to build impactful digital products.
          </p>
        </div>

        <ul className={styles.links}>
          <li>
            <a
              className={styles.link}
              href="mailto:kimleng.ngs@gmail.com"
              aria-label="Send email to Kimleng Thai"
            >
              <span className={styles.iconWrapper}>
                <EmailIcon className={styles.icon} />
              </span>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkValue}>kimleng.ngs@gmail.com</span>
              </span>
            </a>
          </li>

          <li>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/kimlengthai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Kimleng Thai LinkedIn profile"
            >
              <span className={styles.iconWrapper}>
                <LinkedInIcon className={styles.icon} />
              </span>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkValue}>linkedin.com/in/kimlengthai</span>
              </span>
            </a>
          </li>

          <li>
            <a
              className={styles.link}
              href="https://github.com/kimlengthai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Kimleng Thai GitHub profile"
            >
              <span className={styles.iconWrapper}>
                <GitHubIcon className={styles.icon} />
              </span>
              <span className={styles.linkText}>
                <span className={styles.linkLabel}>GitHub</span>
                <span className={styles.linkValue}>github.com/kimlengthai</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <nav className={styles.navigation} aria-label="Secondary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Contact;