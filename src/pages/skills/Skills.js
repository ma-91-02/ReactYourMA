import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Skills.module.css";
import skill from "./imgs/skills.png";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.ourSkills} id="our-skills">
      <h2 className="main-title">{t("ourSkills")}</h2>
      <div className={styles.container}>
        <img src={skill} alt="" />
        <div className={styles.skills}>
          <div className={styles.skill}>
            <h3>
              HTML <span>80%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              CSS <span>85%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "85%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              JavaScript <span>85%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "85%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              PHP <span>90%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              Laravel <span>88%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "88%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              Wordpress <span>80%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              React <span>85%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "85%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              React Native <span>90%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              Next.js <span>80%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className={styles.skill}>
            <h3>
              Node.js <span>80%</span>
            </h3>
            <div className={styles.theProgress}>
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
