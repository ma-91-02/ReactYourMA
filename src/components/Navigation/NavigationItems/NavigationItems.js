import React from "react";
// import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavigationItems.css";


// const goToItem = id_string => { 
//   document.querySelector(`#${id_string}`).scrollIntoView()
//  }
const NavigationItems = (props) => {
  const { t } = useTranslation();
  return [
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <a href="/" exact >
        {t("home")}
      </a>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <a href="/#pricing" exact onClick={props.onChoose}>
        {t("pricing")}
      </a>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <a href="#gallery" exact onClick={props.onChoose}>
        {t("gallery")}
      </a>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <a href="#services" exact onClick={props.onChoose}>
        {t("service")}
      </a>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <a href="#our-skills" exact onClick={props.onChoose}>
        {t("ourSkills")}
      </a>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <a href="#team" exact onClick={props.onChoose}>
        {t("teamMembers")}
      </a>
    </li>,
    // <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
    //   <NavLink to="team" exact onClick={props.onChoose}>
    //     {t("teamMembers")}
    //   </NavLink>
    // </li>,
  ];
};

export default NavigationItems;
