import styles from './Project.module.css';
import ProjectCard from './ProjectCard';

// Importing images
import gameProfileImage from '../../../assets/projects/game_profile.png';
import babyUniversityImage from '../../../assets/history/LoginPage.png';
import zambarkImage from '../../../assets/history/zambark.png';
import IoTLoginPageImage from '../../../assets/projects/IoTLoginPage.png';

export const Project = () => {
  // Define project details manually
  const projects = [
    {
      title: 'Baby University Application',
      image: babyUniversityImage,
      description: 'This project aims to convert the book series "Baby University" into an interactive IOS application.',
      skills: ['React Native', 'Firebase', 'Node', 'Expo'],
      demo: 'https://www.figma.com/proto/8vHPAnmXx1mtfoghgQ4IaE/Apple-Design-Resources-%E2%80%93-iOS-17-and-iPadOS-17-(Community)?node-id=831-383&t=Z9f7q4vCOapZ8QGC-0&scaling=scale-down&content-scaling=fixed&page-id=412%3A26846&starting-point-node-id=433%3A11502',
      source: 'https://github.com/kimlengthai/BabyUniversity'
    },
    {
      title: 'The Pursuit of Reflection',
      image: gameProfileImage,
      description: 'This project is a game designed for people who enjoy problem-sovling and stealth-action challenges.',
      skills: ['C#', 'ShaderLab', 'Unity', 'PixelArt'],
      demo: 'https://bazooh.itch.io/the-pursuit-of-reflection',
      source: 'https://github.com/kimlengthai/saulGoodman'
    },
    {
      title: 'Zambark Suggest',
      image: zambarkImage,
      description: 'This is a project made to recommend students courses based on their interests and study levels.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'MongoDB'],
      demo: 'https://zambark.vercel.app/',
      source: 'https://github.com/kimlengthai/ZAMBARK-SUGGEST'
    },
    {
      title: 'IoTBay',
      image: IoTLoginPageImage,
      description: 'A Java web app for managing user access, IoT devices, orders, and payments using JSP and Servlets.',
      skills: ['Java', 'JSP', 'Servlets', 'JDBC', 'GlassFish'],
      demo: 'http://localhost:32370/ISD_FINAL/',
      source: 'https://github.com/kimlengthai/IoTBAY'
    }
    // Add more projects as needed
  ];

  return (
    <section className={styles.container} id='project'>
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
