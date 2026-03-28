import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

// Importing images
import LoginPageImage from '../../../assets/history/LoginPage.png';
import zambarkImage from '../../../assets/history/zambark.png';
import gameProfileImage from '../../../assets/projects/game_profile.png';
import IoTLoginPageImage from '../../../assets/projects/IoTLoginPage.png';

const imageMap = {
  LoginPage: LoginPageImage,
  zambark: zambarkImage,
  'The Pursuit of Reflection': gameProfileImage,
  'IoTBay Web Application': IoTLoginPageImage,
};

export const ProjectCard = ({ project }) => {
  const { title, image, description, skills, demo, source } = project;

  const projectImage = imageMap[title] || image;

  return (
    <article className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={projectImage}
          alt={`Preview of ${title}`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              className={styles.linkPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}

          {source && (
            <a
              href={source}
              className={styles.linkSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;