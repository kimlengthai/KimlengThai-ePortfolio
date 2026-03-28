import { useState, useContext } from 'react';
import styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../ThemeContext';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#home">
        Kimleng Thai
      </a>

      <div className={styles.rightSection}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>

        <div className={styles.menu}>
          <button
            type="button"
            className={styles.menuIconContainer}
            onClick={handleMenuToggle}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? (
              <CloseIcon
                className={styles.menuBtn}
                // style={{ color: isDarkMode ? 'white' : 'black' }}
              />
            ) : (
              <MenuIcon
                className={styles.menuBtn}
                // style={{ color: isDarkMode ? 'white' : 'black' }}
              />
            )}
          </button>

          <ul
            id="primary-navigation"
            className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          >
            <li><a href="#home" onClick={handleCloseMenu}>Home</a></li>
            <li><a href="#about" onClick={handleCloseMenu}>About</a></li>
            <li><a href="#experience" onClick={handleCloseMenu}>Experience</a></li>
            <li><a href="#project" onClick={handleCloseMenu}>Projects</a></li>
            <li><a href="#contact" onClick={handleCloseMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;