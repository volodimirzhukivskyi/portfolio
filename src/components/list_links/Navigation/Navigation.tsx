import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </li>
        <li>
          <button className={styles.socialButton}>
            <svg className={styles.socialIcon}>
              <use href="/sprite.svg#socialIcon"></use>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
