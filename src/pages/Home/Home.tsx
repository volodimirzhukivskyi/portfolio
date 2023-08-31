import React from 'react';
import Preview from '../../components/Preview/Preview';
import styles from './Home.module.css';
import SkillBloks from '../../components/SkillBloks/SkillBloks';
function Home() {
  return (
    <>
      {' '}
      <div className={`${styles.homeContainer} container`}>
        <Preview />
      </div>
      <SkillBloks />
    </>
  );
}

export default Home;
