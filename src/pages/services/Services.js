import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import "./Services.scss";
const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="services" id="services">
      <h2 className="main-title">{t("service")}</h2>
      <div className="container">
        <div className="box">
          <i className="fas fa-pen-nib fa-4x"></i>
          <h3>{t("webDesign")}</h3>
          <div className="info">
            <Link to="#">Details</Link>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-laptop-code fa-4x"></i>
          <h3>{t("webDevelopment")}</h3>
          <div className="info">
            <Link to="#">Details</Link>
          </div>
        </div>
        <div className="box">
          <i className="fab fa-android fa-4x"></i>
          <h3>{t("androidApp")}</h3>
          <div className="info">
            <Link to="#">Details</Link>
          </div>
        </div>
        <div className="box">
          <i className="fab fa-apple fa-4x"></i>
          <h3>{t("iphoneApp")}</h3>
          <div className="info">
            <Link to="#">Details</Link>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap fa-4x"></i>

          <h3>{t("educationalCourses")}</h3>
          <div className="info">
            <Link to="#">Design</Link>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-rocket fa-4x"></i>
          <h3>{t("Advertising")}</h3>
          <div className="info">
            <Link to="#">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
