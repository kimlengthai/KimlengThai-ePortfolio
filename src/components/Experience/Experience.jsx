import styles from './Experience.module.css';

import htmlSkill from '../../../assets/skills/html.png';
import cssSkill from '../../../assets/skills/css.png';
import tailwindcssSkill from '../../../assets/skills/tailwindCSS.png';
import javascriptSkill from '../../../assets/skills/javascript.png';
import reactSkill from '../../../assets/skills/react.png';
import vueJSSkill from '../../../assets/skills/vueJS.png';
import nextJSSkill from '../../../assets/skills/nextJS.png';
import viteSkill from '../../../assets/skills/vite.jpeg';
import expressJSSkill from '../../../assets/skills/expressJS.png';
import javaFXSkill from '../../../assets/skills/JavaFX.png';
import reactNativeSkill from '../../../assets/skills/ReactNative.png';
import materialUISkill from '../../../assets/skills/materialUI.png';
import expoSkill from '../../../assets/skills/expo.png';
import figmaSkill from '../../../assets/skills/figma.png';
import awsSkill from '../../../assets/skills/aws_logo.png';
import cSharpSkill from '../../../assets/skills/cSharp.png';
import cPlusPlusSkill from '../../../assets/skills/cPlusPlus.png';
import cSkill from '../../../assets/skills/c.png';
import javaSkill from '../../../assets/skills/java.png';
import jspSkill from '../../../assets/skills/JSP.png';
import sqlSkill from '../../../assets/skills/sql.png';
import firebaseSkill from '../../../assets/skills/firebase.png';
import mongodbSkill from '../../../assets/skills/mongoDB.png';
import jdbcSkill from '../../../assets/skills/JDBC.png';
import viCyberLogo from '../../../assets/history/vicyber_logo.jpeg';
import sharingMindsLogo from '../../../assets/history/sharing_logo.webp';
import utsLogo from '../../../assets/history/uts_logo.png';
import amazons3Logo from '../../../assets/skills/amazons3_logo.png';
import antdesignLogo from '../../../assets/skills/antdesign_logo.png';
import awsapiGatewayLogo from '../../../assets/skills/awsapigateway_logo.jpg';
import awsLambdaLogo from '../../../assets/skills/awslambda_logo.svg';
import bootstrapLogo from '../../../assets/skills/bootstrap_logo.png';
import dynamoDBLogo from '../../../assets/skills/dynamodb_logo.png';
import flaskLogo from '../../../assets/skills/flask_logo.png';
import pythonLogo from '../../../assets/skills/python_logo.webp';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { image: reactSkill, name: 'React' },
      { image: javascriptSkill, name: 'JavaScript' },
      { image: htmlSkill, name: 'HTML' },
      { image: cssSkill, name: 'CSS' },
      { image: tailwindcssSkill, name: 'Tailwind CSS' },
      { image: materialUISkill, name: 'Material UI' },
      { image: antdesignLogo, name: 'Ant Design' },
      { image: bootstrapLogo, name: 'Bootstrap' },
      { image: nextJSSkill, name: 'Next.js' },
      { image: vueJSSkill, name: 'Vue.js' },
      { image: viteSkill, name: 'Vite' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { image: pythonLogo, name: 'Python' },
      { image: flaskLogo, name: 'Flask' },
      { image: expressJSSkill, name: 'Express.js' },
      { image: javaSkill, name: 'Java' },
      { image: jspSkill, name: 'JSP' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { image: awsSkill, name: 'AWS' },
      { image: awsLambdaLogo, name: 'AWS Lambda' },
      { image: awsapiGatewayLogo, name: 'API Gateway' },
      { image: dynamoDBLogo, name: 'DynamoDB' },
      { image: amazons3Logo, name: 'Amazon S3' },
    ],
  },
  {
    title: 'Other Technologies',
    skills: [
      { image: mongodbSkill, name: 'MongoDB' },
      { image: firebaseSkill, name: 'Firebase' },
      { image: sqlSkill, name: 'SQL' },
      { image: jdbcSkill, name: 'JDBC' },
      { image: cSharpSkill, name: 'C#' },
      { image: cPlusPlusSkill, name: 'C++' },
      { image: cSkill, name: 'C' },
      { image: javaFXSkill, name: 'JavaFX' },
      { image: reactNativeSkill, name: 'React Native' },
      { image: expoSkill, name: 'Expo' },
      { image: figmaSkill, name: 'Figma' },
    ],
  },
];

const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'ViCyber',
    period: 'Nov 2025 - Present',
    image: viCyberLogo,
    points: [
      'Design and build modern frontend interfaces for cloud based applications using React.',
      'Contribute to selected backend functionality and integrations across Python and AWS based workflows.',
      'Collaborate on platform features that support risk assessment, reporting, and internal business processes.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Sharing Minds',
    period: 'Oct 2025 - Nov 2025',
    image: sharingMindsLogo,
    points: [
      'Supported development and administration across Microsoft Power Platform, including Power Apps, Dataverse configuration, solution deployment, and environment level settings.',
      'Used PowerShell, pac CLI, and Linux command line tools for automation, data verification, and troubleshooting across multiple environments.',
      'Contributed to internal JavaScript and workflow automation tasks, assisting with debugging, refactoring, and integration work across Dynamics 365 and Dataverse.',
      'Collaborated with engineers and product stakeholders in an Agile workflow, applying software engineering fundamentals and SQL based data validation.',
    ],
  },
  {
    title: 'Mathematics Tutor',
    company: 'University of Technology Sydney',
    period: 'Jul 2024 - Oct 2025',
    image: utsLogo,
    points: [
      'Taught university level mathematics, guiding students through complex topics to help them achieve academic success.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'ViCyber',
    period: 'Nov 2024 - Feb 2025',
    image: viCyberLogo,
    points: [
      'Developed and deployed an automated PDF reporting solution using Puppeteer, AWS Lambda, S3, and JavaScript to generate structured reports from dynamic data inputs.',
      'Designed and implemented responsive dashboard interfaces using React.js, HTML, and CSS to visualise risk metrics and improve user experience.',
      'Built serverless backend workflows to support report generation and secure document storage, leveraging cloud native architecture principles.',
    ],
  },
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionHeading}>Technical Skills</h3>
          <p className={styles.sectionIntro}>
            Technologies I have worked with across frontend, backend, and cloud development.
          </p>

          {skillGroups.map((group) => (
            <div key={group.title} className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>{group.title}</h4>

              <div className={styles.skillsList}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={skill.image} alt={skill.name} className={styles.skillImage} />
                    </div>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.historySection}>
          <h3 className={styles.sectionHeading}>Professional Experience</h3>
          <p className={styles.sectionIntro}>
            My recent roles across software engineering, development, and academic support.
          </p>

          <ul className={styles.historyList}>
            {experiences.map((item) => (
              <li key={`${item.title}-${item.period}`} className={styles.historyItem}>
                <div className={styles.historyLink}>
                  <img
                    src={item.image}
                    alt={`${item.company} logo`}
                    className={styles.historyImage}
                  />

                  <div className={styles.historyItemDetails}>
                    <div className={styles.historyHeader}>
                      <h4>{item.title}</h4>
                      <span className={styles.companyTag}>{item.company}</span>
                    </div>

                    <p className={styles.period}>{item.period}</p>

                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
};

export default Experience;