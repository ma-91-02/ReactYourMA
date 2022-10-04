import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import styles from "./Team.module.css";

import saif from "./imgs/saif.jpg";
import alina from "./imgs/alina.jpg";
import ceo from "./imgs/ceo.jpg";
import youri from './imgs/youri.png';

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.team} id="team">
      <h2 className="main-title">{t("teamMembers")}</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.data}>
            <img className={styles.img} src={saif} alt="" />
            <div className={styles.social}>
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div className={styles.info}>
            <h3>{t("saif")} </h3>
            <p>{t("saifContent")}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.data}>
            <img className={styles.img} src={ceo} alt="" />
            <div className={styles.social}>
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div className={styles.info}>
            <h3>{t("mohamedAlzurfi")} </h3>
            <p>{t("mohamedContent")}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.data}>
            <img className={styles.img} src={alina} alt="" />
            <div className={styles.social}>
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div className={styles.info}>
            <h3>{t("alina")}</h3>
            <p>{t("alinaContent")}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.data}>
            <img className={styles.img} src={youri} alt="" />
            <div className={styles.social}>
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div className={styles.info}>
            <h3>{t("youri")}</h3>
            <p>{t("youriContent")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
