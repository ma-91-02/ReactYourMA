import React from "react";
import styles from "./Footer.module.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { useTranslation } from "react-i18next";
import gall1 from "../images/gallery-01.png";
import gall2 from "../images/gallery-02.png";
import gall3 from "../images/gallery-03.jpg";
import gall4 from "../images/gallery-04.png";
import gall5 from "../images/gallery-05.jpg";
import gall6 from "../images/gallery-06.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>
            {t("your")}
            {t("MA")}
          </h3>
          <ul className={styles.social}>
            <li>
              <a
                href="https://www.facebook.com/Your-MA-102030702098496"
                className={styles.facebook}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCoyfWHRcfOvnh7asK7s4-gQ"
                className={styles.youtube}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MohammedZurfi"
                className={styles.twitter}
              >
                <i className="fab fa-vk"></i>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/joinchat/Yn78bk9MxKcxOTJi"
                className={styles.twitter}
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
          <p className={styles.text}>{t("website_iphone_android")}</p>
        </div>
        <div className={styles.box}>
          <ul className={styles.links}>
            <li>
              <a href="{{url('/')}}">{t("home")}</a>
            </li>
            <li>
              <a href="{{url('/#pricing')}}">{t("pricing")}</a>
            </li>
            <li>
              <a href="#features">{t("features")}</a>
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <div className={styles.line}>
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className={styles.info}>{t("addres")}</div>
          </div>
          <div className={styles.line}>
            <i className="far fa-clock fa-fw"></i>
            <div className={styles.info}>
              {t("businessHours")}
              <br />
              {t("businessDays")}
            </div>
          </div>
          <div className={styles.line}>
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className={styles.info}>
              <span>+79005138049</span>
            </div>
          </div>
        </div>
        <div className={styles.footerGallery}>
          <img src={gall1} alt="" />
          <img src={gall2} alt="" />
          <img src={gall3} alt="" />
          <img src={gall4} alt="" />
          <img src={gall5} alt="" />
          <img src={gall6} alt="" />
        </div>
      </div>
      <p className={styles.copyright}>
        {" "}
        &copy; {t("your")}
        {t("MA")}{" "}
      </p>
    </div>
  );
};

export default Footer;
