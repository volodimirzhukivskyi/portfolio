import styles from './SkillBloks.module.css';
import RandomColorItem from '../RandomColorItem/RamdomColorItem';
import { useState } from 'react';
import { FrontSpans, FRONT, BACK } from '../../helpers/constans';
function SkillBloks() {
  const [active, setActive] = useState(FRONT);

  const activeFront = active === FRONT;

  const changeActiveClass = (active: string) => {
    setActive(active);
  };
  return (
    <section className={`${''} container`}>
      <h2>Experience</h2>
      <div>
        <div className={styles.actions}>
          <button onClick={() => changeActiveClass(FRONT)} className={`${styles.button} ${styles.front} ${activeFront && styles.active}`}>
            {FrontSpans.map((letter) => (
              <RandomColorItem>{letter}</RandomColorItem>
            ))}
          </button>
          <button onClick={() => changeActiveClass(BACK)} className={`${styles.button} ${styles.back} ${!activeFront && styles.active}`}>
            Back end
          </button>
        </div>
        <ul className={`${styles[active]}  ${styles.list} `}>
          <li>test1</li>
        </ul>
        <img src="" alt="" />
      </div>
    </section>
  );
}

export default SkillBloks;
