import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <h3>Technical Skills</h3>
          <div className={styles.skillsList}>
            {skills.map((skill) => (
              <div key={skill.title} className={styles.skill}>
              <div className={styles.skillImageContainer}> 
              <img src={skill.image} alt={skill.title} className={styles.skillImage} />
              </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.historySection}>
          <h3>Work History</h3>
          <ul className={styles.history}>
            {history.map((historyItem) => (
              <li key={historyItem.role} className={styles.historyItem}>
                <img src={historyItem.image} alt={`${historyItem.organisation} Logo`} className={styles.historyImage} />
                <div className={styles.historyItemDetails}>
                  <h4>{`${historyItem.role}, ${historyItem.organisation}`}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
