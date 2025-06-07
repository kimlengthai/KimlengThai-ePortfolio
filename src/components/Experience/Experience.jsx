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
import LoginPageImage from '../../../assets/history/LoginPage.png';
import zambarkImage from '../../../assets/history/zambark.png';
import mmsImage from '../../../assets/history/mms.png';
import IoTLoginPageImage from '../../../assets/projects/IoTLoginPage.png';
import viCyberLogo from '../../../assets/history/vicyber_logo.jpeg';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillsSection}>
          <h3 className={styles.technicalSkill}>Technical Skills</h3>
          <div className={styles.skillsList}>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={htmlSkill} alt="HTML" className={styles.skillImage} />
              </div>
              <p>HTML</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={cssSkill} alt="CSS" className={styles.skillImage} />
              </div>
              <p>CSS</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={tailwindcssSkill} alt="Tailwind_CSS" className={styles.skillImage} />
              </div>
              <p>Tailwind CSS</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={javascriptSkill} alt="JavaScript" className={styles.skillImage} />
              </div>
              <p>JavaScript</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={reactSkill} alt="React" className={styles.skillImage} />
              </div>
              <p>React</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={vueJSSkill} alt="Vue_JS" className={styles.skillImage} />
              </div>
              <p>Vue.js</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={nextJSSkill} alt="Next_JS" className={styles.skillImage} />
              </div>
              <p>Next.js</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={expressJSSkill} alt="Express_JS" className={styles.skillImage} />
              </div>
              <p>Express.js</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={javaFXSkill} alt="JavaFX" className={styles.skillImage} />
              </div>
              <p>JavaFX</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={reactNativeSkill} alt="React Native" className={styles.skillImage} />
              </div>
              <p>React Native</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={materialUISkill} alt="Material UI" className={styles.skillImage} />
              </div>
              <p>Material UI</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={expoSkill} alt="Expo" className={styles.skillImage} />
              </div>
              <p>Expo</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={viteSkill} alt="Vite" className={styles.skillImage} />
              </div>
              <p>Vite</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={figmaSkill} alt="Figma" className={styles.skillImage} />
              </div>
              <p>Figma</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={awsSkill} alt="AWS" className={styles.skillImage} />
              </div>
              <p>AWS</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={cSharpSkill} alt="C#" className={styles.skillImage} />
              </div>
              <p>C#</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={cPlusPlusSkill} alt="C++" className={styles.skillImage} />
              </div>
              <p>C++</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={cSkill} alt="C" className={styles.skillImage} />
              </div>
              <p>C</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={javaSkill} alt="Java" className={styles.skillImage} />
              </div>
              <p>Java</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={jspSkill} alt="JSP" className={styles.skillImage} />
              </div>
              <p>JSP</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={sqlSkill} alt="SQL" className={styles.skillImage} />
              </div>
              <p>SQL</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={firebaseSkill} alt="Firebase" className={styles.skillImage} />
              </div>
              <p>Firebase</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={mongodbSkill} alt="MongoDB" className={styles.skillImage} />
              </div>
              <p>MongoDB</p>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={jdbcSkill} alt="JDBC" className={styles.skillImage} />
              </div>
              <p>JDBC</p>
            </div>
          </div>
        </div>
        <div className={styles.historySection}>
          <h3 className={styles.workHistory}>Work History</h3>
          <ul className={styles.historyList}>
          {/* IoTBay Java Web App */}
            <li className={styles.historyItem}>
              <a
                href="https://github.com/kimlengthai/IoTBay" // Replace with actual URL if different
                target='_blank'
                rel='noopener noreferrer'
                className={styles.historyLink}
              >
                 <img
                  src={IoTLoginPageImage}
                  alt="IoTBay Logo"
                  className={styles.historyImage}
                /> 
                <div className={styles.historyItemDetails}>
                  <h4>Full-stack Developer, IoTBay Project</h4>
                  <p>Mar, 2025 - May, 2025</p>
                  <ul>
                    <li>Developed a full-stack Java web app for an e-commerce platform focused on IoT products</li>
                    <li>Implemented backend logic with Java Servlets and frontend with JSP</li>
                    <li>Designed and connected to JavaDB (Apache Derby) database for product and user management</li>
                    <li>Created responsive UI using Tailwind CSS, HTML, and JavaScript</li>
                  </ul>
                </div>
              </a>
            </li>
            {/* Internship Experience */}
            <li className={styles.historyItem}>
              <div className={styles.historyLink}>
                <img
                  src={viCyberLogo}
                  alt="ViCyber Logo"
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h4>Software Engineering Intern, ViCyber</h4>
                  <p>Nov, 2024 - Feb, 2025</p>
                  <ul>
                    <li>Developed and optimised frontend components using React.js to enhance user experience</li>
                    <li>Automated dynamic PDF report generation using Puppeteer, AWS Lambda, and structured JSON</li>
                    <li>Designed 20+ responsive UI/UX components in Figma to support cross-device usability</li>
                    <li>Collaborated on AWS-based infrastructure, improving performance across key workflows</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.historyItem}>
              <a
                href="https://github.com/kimlengthai/BabyUniversity"
                target='_blank'
                rel='noopener noreferrer'
                className={styles.historyLink}
              >
                <img
                  src={LoginPageImage}
                  alt="LoginPage Logo"
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h4>Frontend Developer, Baby University</h4>
                  <p>Mar, 2024 - May, 2024</p>
                  <ul>
                    <li>Worked on Animations pages on a book and main page</li>
                    <li>Implemented parental control pages to access the payment system</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className={styles.historyItem}>
              <a
                href="https://github.com/kimlengthai/ZAMBARK-SUGGEST"
                target='_blank'
                rel='noopener noreferrer'
                className={styles.historyLink}
              >
                <img
                  src={zambarkImage}
                  alt="zambark Logo"
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h4>Backend Developer, Zambark</h4>
                  <p>Aug, 2023 - Nov, 2023</p>
                  <ul>
                    <li>Worked on recommending student courses</li>
                    <li>Stored and retrieved subjects from MongoDB</li>
                  </ul>
                </div>
              </a>
            </li>
            <li className={styles.historyItem}>
              <a
                href="https://github.com/kimlengthai/MembershipManagementSystem"
                target='_blank'
                rel='noopener noreferrer'
                className={styles.historyLink}
              >
                <img
                  src={mmsImage}
                  alt="mms Logo"
                  className={styles.historyImage}
                />
                <div className={styles.historyItemDetails}>
                  <h4>UX/UI Designer & Frontend Developer, University of Technology Sydney</h4>
                  <p>Sep, 2022 - Oct, 2022</p>
                  <ul>
                    <li>Developed a GUI, allowing users to add, remove, and update membership status</li>
                    <li>Demonstrated proficiency in model-view-controller architecture</li>
                  </ul>
                </div>
              </a>
            </li>
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
}

export default Experience;