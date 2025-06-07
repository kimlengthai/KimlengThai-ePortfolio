import styles from './Contact.module.css';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contacts</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
      <EmailIcon className={styles.icon} />
      <a href="mailto:kimleng.ngs@gmail.com" aria-label="Send email to Kimleng">kimleng.ngs@gmail.com</a>
      </li>
      <li className={styles.link}>
      <LinkedInIcon className={styles.icon} />
      <a href="https://www.linkedin.com/in/kimlengthai/">linkedin.com/in/kimlengthai/</a>
      </li>
      <li className={styles.link}>
      <GitHubIcon className={styles.icon} />
      <a href="https://github.com/kimlengthai">github.com/kimlengthai</a>
      </li>
    </ul>

    <nav className={styles.navigation} aria-label="Secondary navigation">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#project">Projects</a>
    <a href="#contact">Contact</a>
    </nav>
    </footer>
  );
}

export default Contact;
