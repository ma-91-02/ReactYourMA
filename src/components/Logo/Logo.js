import React from "react";

import "./Logo.scss";
import pic from "../../images/logo.png";

const logo = (props) => (
//   <a href="\" exact onClick={props.onChoose}>
    <div className="logo">
      <img className="logotop" src={pic} alt="logo" />
    </div>
//   </a>
);

export default logo;
