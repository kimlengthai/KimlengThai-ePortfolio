import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Project } from './components/Projects/Project';

function App() {
  const [component, setComponent] = useState(<Hero />);

  useEffect(() => {
    const handleHashChange = () => {
      switch (window.location.hash) {
        case '#about':
          setComponent(<About />);
          break;
        case '#experience':
          setComponent(<Experience />);
          break;
        case '#project':
          setComponent(<Project />);
          break;
        case '#home':
        default:
          setComponent(<Hero />);
          break;
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial load
    handleHashChange();

    // Cleanup
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      {component}
    </div>
  );
}

export default App;
