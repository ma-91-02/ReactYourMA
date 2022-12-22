import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";
import { useTranslation } from "react-i18next";
import them2 from "../../images/theme2.webp";
import them1 from "../../images/theme1.webp";
import them3 from "../../images/theme3.webp";
import them4 from "../../images/theme4.webp";
import oldstol from "../../images/oldstol.webp";

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
                <img src={them1} alt="them1"  width="100%" height="418px"  />
              </div>
            </div>
          </Link>
          <Link to="http://theme2.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them2} alt="them2" width="100%" height="418px"  />
              </div>
            </div>
          </Link>
          <Link to="http://theme3.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them3} alt="them3" width="100%" height="418px"  />
              </div>
            </div>
          </Link>
          <Link to="http://theme4.your-ma.com/" target="_blank">
            <div className="box">
              <div className="image">
                <img src={them4} alt="them4" width="100%" height="418px" />
              </div>
            </div>
          </Link>

          <a href="https://oldstol.com/"  target="_blank" rel="noreferrer">
            <div className="box">
              <div className="image">
                <img src={oldstol} alt="oldstile" width="100%" height="418px" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
