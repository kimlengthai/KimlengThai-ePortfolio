import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 830);
        };

        handleResize(); // Check initial width
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>
                Kimleng Thai
            </a>
            <div className={styles.menu}>
                {isMobile && ( // Display MenuIcon only on mobile screens
                    menuOpen ? (
                        <CloseIcon
                            className={styles.menuBtn}
                            onClick={() => setMenuOpen(!menuOpen)}
                            alt="close-button"
                        />
                    ) : (
                        <MenuIcon
                            className={styles.menuBtn}
                            onClick={() => setMenuOpen(!menuOpen)}
                            alt="menu-button"
                        />
                    )
                )}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
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
