import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavigationItems.css";

// const goToItem = id_string => {
//   document.querySelector(`#${id_string}`).scrollIntoView()
//  }
const NavigationItems = (props) => {
  const { t } = useTranslation();
  return [
    <li
      className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}
      key="home"
    >
      <NavLink to={`#home}`} >
        {t("home")}
      </NavLink>
    </li>,
    <li
      className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}
      key="pricing"
    >
      <a href="/#pricing"  onClick={props.onChoose}>
        {t("pricing")}
      </a>
    </li>,
    <li
      className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}
      key="gallery"
    >
      <a href="#gallery"  onClick={props.onChoose}>
        {t("gallery")}
      </a>
    </li>,
    <li
      className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}
      key="service"
    >
      <a href="#services"  onClick={props.onChoose}>
        {t("service")}
      </a>
    </li>,
    <li
      className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}
      key="ourSkills"
    >
      <a href="#our-skills"  onClick={props.onChoose}>
        {t("ourSkills")}
      </a>
    </li>,
    <li
      className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}
      key="teamMembers"
    >
      <a href="#team"  onClick={props.onChoose}>
        {t("teamMembers")}
      </a>
    </li>,
    // <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
    //   <NavLink to="team"  onClick={props.onChoose}>
    //     {t("teamMembers")}
    //   </NavLink>
    // </li>,
  ];
};

export default NavigationItems;
