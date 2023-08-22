import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "../list_links/Navigation/Navigation";
import Social from "../list_links/Social/Social";

function Header() {
  return (
    <header className={styles.header} >
      <div className={`${styles.headerContainer} container`}>
        <Link to="/">
          <svg className={styles.logo}>
            <use href="/sprite.svg#logo"></use>
          </svg>
        </Link>
        <Navigation />
        <Social/>
      </div>
    </header>
  );
}

export default Header;
