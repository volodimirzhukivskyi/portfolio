import styles from './SkillBloks.module.css';
import RandomColorItem from '../RandomColorItem/RamdomColorItem';
import { useState } from 'react';
import { FRONT, BACK, FRONT_SKILLS, BACK_SKILLS, SkillsI, FRONT_END } from '../../helpers/constans';
import { getColorComponent } from '../../helpers/changeColor';
function SkillBloks() {
  const [active, setActive] = useState(FRONT);

  const activeFront = active === FRONT;
  const skils: Array<SkillsI> = activeFront ? FRONT_SKILLS : BACK_SKILLS;
  const changeActiveClass = (active: string) => {
    setActive(active);
  };
  return (
    <section className={`${''} container`}>
      <h2>Experience</h2>
      <div>
        <div className={styles.actions}>
          <button onClick={() => changeActiveClass(FRONT)} className={`${styles.button} ${styles.front} ${activeFront && styles.active}`}>
            {getColorComponent(FRONT_END)}
          </button>
          <button onClick={() => changeActiveClass(BACK)} className={`${styles.button} ${styles.back} ${!activeFront && styles.active}`}>
            Back end
          </button>
        </div>
        <ul className={`${styles[active]}  ${styles.list} `}>
          {skils.map(({ category, info }) => {
            return (
              <li className={styles.item}>
                <h2 className={styles.categoryTitle}>{activeFront ? getColorComponent(category, ' ') : category}</h2>
                <p className={styles.text}>{info.arr.join(' / ')}</p>
              </li>
            );
          })}
        </ul>
        <img src="" alt="" />
      </div>
    </section>
  );
}

export default SkillBloks;
