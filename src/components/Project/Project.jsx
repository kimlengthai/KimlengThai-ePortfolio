import styles from './Project.module.css';
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';

export const Project = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
