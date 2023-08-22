import React from "react";
import Preview from "../../components/Preview/Preview";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={`${styles.homeContainer} container`}>
      <Preview />
    </div>
  );
}

export default Home;
