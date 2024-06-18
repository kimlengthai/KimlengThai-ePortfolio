import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

// Importing images
import LoginPageImage from '../../../assets/history/LoginPage.png';
import zambarkImage from '../../../assets/history/zambark.png';
import gameProfileImage from '../../../assets/projects/game_profile.png';

export const ProjectCard = ({ project }) => {
  const { title, image, description, skills, demo, source } = project;
  
  // Determine which image to use based on project title
  let projectImage;
  if (title === 'LoginPage') {
    projectImage = LoginPageImage;
  } else if (title === 'zambark') {
    projectImage = zambarkImage;
  } else if (title === 'The Pursuit of Reflection') {
    projectImage = gameProfileImage;
  } else {
    projectImage = image; // Fallback to provided image if not matched
  }

  return (
    <div className={styles.container}> 
      <img src={projectImage} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    source: PropTypes.string
  }).isRequired
};

export default ProjectCard;
