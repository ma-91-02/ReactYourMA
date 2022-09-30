import React from "react";
// import styles from "./Landing.module.css";
import pic from "../images/logo.png";

import './Landing.scss';

import { useTranslation } from "react-i18next";
const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="landing" id='home'>
      <div className="container">
        <div className="text">
          <h1>
            {t("welcome")} <br />{" "}
            <span className="title">
              {t("your")} {t("MA")}
            </span>
          </h1>
          <p>{t("website_iphone_android")}</p>
        </div>
        <div className="image">
          <img src={pic} />
        </div>
      </div>
      <a href="#events" class="go-down">
        <i class="fas fa-angle-double-down fa-2x"></i>
      </a>
    </div>
  );
};

export default Landing;
