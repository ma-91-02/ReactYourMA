import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Services.module.css";
const Services = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.services} id="services">
      <h2 className="main-title">{t("service")}</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <i className="fas fa-pen-nib fa-4x"></i>
          <h3>{t("webDesign")}</h3>
          <div className={styles.info}>
            <a href="#">Details</a>
          </div>
        </div>
        <div className={styles.box}>
          <i className="fas fa-laptop-code fa-4x"></i>
          <h3>{t("webDevelopment")}</h3>
          <div className={styles.info}>
            <a href="#">Details</a>
          </div>
        </div>
        <div className={styles.box}>
          <i className="fab fa-android fa-4x"></i>
          <h3>{t("androidApp")}</h3>
          <div className={styles.info}>
            <a href="#">Details</a>
          </div>
        </div>
        <div className={styles.box}>
          <i className="fab fa-apple fa-4x"></i>
          <h3>{t("iphoneApp")}</h3>
          <div className={styles.info}>
            <a href="#">Details</a>
          </div>
        </div>
        <div className={styles.box}>
          <i className="fas fa-graduation-cap fa-4x"></i>

          <h3>{t("educationalCourses")}</h3>
          <div className={styles.info}>
            <a href="#">Design</a>
          </div>
        </div>
        <div className={styles.box}>
          <i className="fas fa-rocket fa-4x"></i>
          <h3>{t("Advertising")}</h3>
          <div className={styles.info}>
            <a href="#">Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
