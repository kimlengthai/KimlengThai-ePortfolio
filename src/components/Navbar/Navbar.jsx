import { useState } from 'react';
import styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>
                Kimleng Thai
            </a>
            <div className={styles.menu}>
                <div className={styles.menuIconContainer} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <CloseIcon className={styles.menuBtn} alt="close-button" />
                    ) : (
                        <MenuIcon className={styles.menuBtn} alt="menu-button" />
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
        </nav>
    );
}

export default Navbar;
