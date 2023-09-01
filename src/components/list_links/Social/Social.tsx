import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Social.module.css';
function Social() {
  const socials = [
    { id: 1, path: 'https://youtube.com/', icon: 'youtube' },
    { id: 2, icon: 'linkedin', path: 'https://linkedin.com/in/' },
    { id: 3, icon: 'twitter', path: 'https://twitter.com/' },
    { id: 4, icon: 'instagram', path: 'https://instagram.com/' },
  ];
  return (
    <ul className={styles.socialListContainer}>
  
      {socials.map(({ id, icon, path }) => (
        <li key={id} className={styles.socialItem}>
          <a href={path} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${icon} ${styles.socialIcon} `} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
