import Preview from '../../components/Preview/Preview';
import styles from './Home.module.css';
import SkillBloks from '../../components/SkillBloks/SkillBloks';
import Projects from "../../components/Projects/Projects.tsx";

function Home() {
    return (
        <>
            <div className={`${styles.homeContainer} container`}>
                <Preview/>
            </div>
            <SkillBloks/>
            <Projects/>
        </>
    );
}

export default Home;
