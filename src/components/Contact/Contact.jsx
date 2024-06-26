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
      <a href="mailto:kimleng.ngs@gmail.com">kimleng.ngs@gmail.com</a>
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
    </footer>
  );
}

export default Contact;
