import React from "react";
// import { Link } from 'react-router-dom';
import "./Footer.scss";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { useTranslation } from "react-i18next";
import gall1 from "../images/gallery-01.png";
import gall2 from "../images/gallery-02.png";
import gall3 from "../images/gallery-03.jpg";
import gall4 from "../images/gallery-04.webp";
import gall5 from "../images/gallery-05.webp";
import gall6 from "../images/gallery-06.webp";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>
            {t("your")}
            {t("MA")}
          </h3>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/Your-MA-102030702098496"
                className="facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCoyfWHRcfOvnh7asK7s4-gQ"
                className="youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MohammedZurfi"
                className="twitter"
              >
                <i className="fab fa-vk"></i>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/your_ma2021"
                className="twitter"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
          <p className="text">{t("website_iphone_android")}</p>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <a href="/">{t("home")}</a>
            </li>
            <li>
              <a href="#pricing">{t("pricing")}</a>
            </li>
            <li>
              <a href="#features">{t("features")}</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">{t("addres")}</div>
          </div>
          <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">{t("addres1")}</div>
          </div>
          <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">{t("addres2")}</div>
          </div>
          <div className="line">
            <i className="far fa-clock fa-fw"></i>
            <div className="info">
              {t("businessHours")}
              <br />
              {t("businessDays")}
            </div>
          </div>
          <div className="line">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="info">
              <span>+79005138049</span>
            </div>
          </div>
        </div>
        <div className="footerGallery">
          <img src={gall1} alt="galleray1"height="100%" width="100%" />
          <img src={gall2} alt="galleray2"height="100%" width="100%" />
          <img src={gall3} alt="galleray3"height="100%" width="100%" />
          <img src={gall4} alt="galleray4"height="100%" width="100%" />
          <img src={gall5} alt="galleray5"height="100%" width="100%" />
          <img src={gall6} alt="galleray6"height="100%" width="100%" />
        </div>
      </div>
      <p className="copyright">
        {" "}
        &copy; {t("your")}
        {t("MA")}{" "}
      </p>
    </div>
  );
};

export default Footer;
