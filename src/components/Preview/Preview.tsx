import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Preview.module.css';
function Preview() {
  return (
    <section>
      <h1 className={styles.title}>
        Nice to meet you! I’m <span className={styles.name}>Volodymyr Zhukivskyi</span>.
      </h1>
      <p className={styles.text}>
        Based in the Ukraine/Kyiv, I’m a full-stack developer passionate about building accessible web apps that users love.
      </p>
      <img src="/img/home/profile-photo.jpg" className={styles.profilePhoto} alt="" />
    </section>
  );
}

export default Preview;
