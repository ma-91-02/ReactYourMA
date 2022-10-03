import React from "react";
import { NavLink } from "react-router-dom";

import MobileToggle from "../MobileToggle/MobileToggle";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SelectLang from "../../selecteLang/SelectLang";

import "./MainNavigation.css";


const MainNavigation = (props) => {
  // const func = id_string => { 
  
  //   document.querySelector(`#${id_string}`).scrollIntoView()
  //  }
  return(
    <div className="container">
    <nav className="main-nav">
      <MobileToggle onOpen={props.onOpenMobileNav} />
      
      <div className="main-nav__logo">
        <NavLink to="#home" onClick={props.onChoose}>
          <Logo />
        </NavLink>
      </div>
      <div className="spacer" />
      <ul className="main-nav__items">
        <NavigationItems onChoose={props.onChooseItem} isAuth={props.isAuth} onLogout={props.onLogout} />
        {/* <NavigationItems/> */}
      </ul>
      <SelectLang />
    </nav>
    
  </div>
);
}
  

export default MainNavigation;
