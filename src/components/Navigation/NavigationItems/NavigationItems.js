import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavigationItems.css";


const goToItem = id_string => { 
  document.querySelector(`#${id_string}`).scrollIntoView()
 }
const NavigationItems = (props) => {
  const { t } = useTranslation();
  return [
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <NavLink to="/#home" exact onClick={props.onChoose}>
        {t("home")}
      </NavLink>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <NavLink to="/#pricing" exact onClick={props.onChoose}>
        {t("pricing")}
      </NavLink>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <NavLink to="#gallery" exact onClick={props.onChoose}>
        {t("gallery")}
      </NavLink>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <NavLink to="#services" exact onClick={props.onChoose}>
        {t("service")}
      </NavLink>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <NavLink to="#our-skills" exact onClick={props.onChoose}>
        {t("ourSkills")}
      </NavLink>
    </li>,
    <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
      <NavLink to="#team" exact onClick={props.onChoose}>
        {t("teamMembers")}
      </NavLink>
    </li>,
    // <li className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}>
    //   <NavLink to="team" exact onClick={props.onChoose}>
    //     {t("teamMembers")}
    //   </NavLink>
    // </li>,
  ];
};

export default NavigationItems;
