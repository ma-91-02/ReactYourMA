import React from "react";
import "./Gallery.scss";
import { useTranslation } from "react-i18next";
import them2 from "../../images/theme2.png";
import them1 from "../../images/theme1.png";
import them3 from "../../images/theme3.png";
import them4 from "../../images/theme4.png";

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="gallery" id="gallery">
        <h2 className="main-title">{t("gallery")}</h2>
        <div className="container">
          <a href="http://theme1.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them1} alt="" />
              </div>
            </div>
          </a>
          <a href="http://theme2.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them2} alt="" />
              </div>
            </div>
          </a>
          <a href="http://theme3.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them3} alt="" />
              </div>
            </div>
          </a>
          <a href="http://theme4.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them4} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
