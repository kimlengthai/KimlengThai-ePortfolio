import styles from './Project.module.css';
import ProjectCard from './ProjectCard';

// Importing images
import gameProfileImage from '../../../assets/projects/game_profile.png';
import babyUniversityImage from '../../../assets/history/LoginPage.png';
import zambarkImage from '../../../assets/history/zambark.png';
import IoTLoginPageImage from '../../../assets/projects/IoTLoginPage.png';
import machineLearningImage from '../../../assets/projects/machineLearning.png';

import recipeImage from '../../../assets/projects/recipeImage.png';

export const Project = () => {
  // Define project details manually
  const projects = [
    {
      title: 'Baby University Application',
      image: babyUniversityImage,
      description: 'This project aims to convert the book series "Baby University" into an interactive IOS application.',
      skills: ['React Native', 'Firebase', 'Node', 'Expo'],
      demo: 'https://www.figma.com/proto/8vHPAnmXx1mtfoghgQ4IaE?node-id=412-26846&t=Uq4hE9eDf2KdzzxE-6',
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
      demo: 'https://drive.google.com/file/d/1oDDZo-kvfzsfUJmYvANj-1lC1tiWUvpo/view?usp=sharing',
      source: 'https://github.com/kimlengthai/IoTBAY'
    },
    {
      title: 'Decision Tree Classification',
      image: machineLearningImage,
      description: 'A study of a decision tree model, focusing on theoretical fundamentals.',
      skills: ['Python', 'Machine Learning', 'Decision Tree', 'Colab-Notebook'],
      demo: 'https://colab.research.google.com/drive/1xxFlUDODqGzgJgZuvKkvRKehHhGYVF25?usp=sharing',
      source: 'https://github.com/kimlengthai/study-a-fundamental-ml-model'
    },
    {
      title: 'Recreation of the classic Pac-Man game',
      image: machineLearningImage,
      description: 'This game features a student-themed setting. It was built using C# and Unity Engine.',
      skills: ['C#', 'Unity', 'Pac-Student'],
      /* demo: */
      source: 'https://github.com/kimlengthai/Assessment4'
    },
    {
      title: 'Recipe Application',
      image: recipeImage,
      description: 'A React-based Recipe App for users to search, view, and favorite their recipes.',
      skills: ['React', 'React Router', 'Context API', 'Tailwind CSS'],
      demo: 'https://github.com/kimlengthai/recipe-app/blob/main/README.md',
      source: 'https://github.com/kimlengthai/recipe-app'
    }
  ];

  return (
    <section className={styles.container} id='project'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      <nav className={styles.navigation} aria-label="Secondary navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#project">Projects</a>
      <a href="#contact">Contact</a>
      </nav>
    </section>
  );
}

export default Project;
