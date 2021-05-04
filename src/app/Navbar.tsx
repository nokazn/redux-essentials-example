import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className={styles.navContent}>
          <div className={styles.navLinks}></div>
        </div>
      </section>
    </nav>
  );
};
