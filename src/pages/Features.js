import React from "react";
import "./Features.css";
import { useTranslation } from "react-i18next";
import feat1 from "../images/features-01.jpg";
import feat2 from "../images/features-02.jpg";
import feat3 from "../images/features-03.jpg";

const Features = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="features" id="features">
        <h2 className="main-title">{t("features")}</h2>
        <div className="container">
          <div className="box quality">
            <div className="img-holder">
              <img src={feat1} alt="" />
            </div>
            <h2>{t("quality")}</h2>
            <p>{t("qualityContent")}</p>
            <a href="#">{t("more")}</a>
          </div>
          <div className="box time">
            <div className="img-holder">
              <img src={feat2} alt="" />
            </div>
            <h2>{t("time")}</h2>
            <p> {t("timeContent")}</p>
            <a href="#">{t("more")}</a>
          </div>
          <div className="box passion">
            <div className="img-holder">
              <img src={feat3} alt="" />
            </div>
            <h2>{t("passion")}</h2>
            <p>{t("passionContent")}</p>
            <a href="#">{t("more")}</a>
          </div>
        </div>
      </div>
      <div class="spikes"></div>
    </>
  );
};

export default Features;
