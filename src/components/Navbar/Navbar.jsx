import { useState } from 'react';
import styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={styles.navbar}>
        <a className={styles.title} href='/'>
            Kimleng Thai
        </a>

        <div className={styles.rightSection}>
            <div className={styles.themeToggle} onClick={toggleTheme} title="Toggle Theme">
            {isDarkMode ? '🌙' : '☀️'}
            </div>

            <div className={styles.menu}>
            <div className={styles.menuIconContainer} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                <CloseIcon className={styles.menuBtn} style={{ color: isDarkMode ? 'white' : 'black' }} />
                ) : (
                <MenuIcon className={styles.menuBtn} style={{ color: isDarkMode ? 'white' : 'black' }} />
                )}
            </div>
            <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#project'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
