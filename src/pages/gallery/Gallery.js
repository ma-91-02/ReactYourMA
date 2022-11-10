import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";
import { useTranslation } from "react-i18next";
import them2 from "../../images/theme2.png";
import them1 from "../../images/theme1.png";
import them3 from "../../images/theme3.png";
import them4 from "../../images/theme4.png";
import oldstol from "../../images/oldstol.png";

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="gallery" id="gallery">
        <h2 className="main-title">{t("gallery")}</h2>
        <div className="container">
          <Link to="http://theme1.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them1} alt="" />
              </div>
            </div>
          </Link>
          <Link to="http://theme2.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them2} alt="" />
              </div>
            </div>
          </Link>
          <Link to="http://theme3.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them3} alt="" />
              </div>
            </div>
          </Link>
          <Link to="http://theme4.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them4} alt="" />
              </div>
            </div>
          </Link>

          <a href="https://oldstol.com/"  target="_blank" rel="noreferrer">
            <div className="box">
              <div className="image">
                <img src={oldstol} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
