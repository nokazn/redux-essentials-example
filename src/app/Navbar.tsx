import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className={styles.navContent}>
          <div className={styles.navLinks}>
            <Link to='/'>Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
