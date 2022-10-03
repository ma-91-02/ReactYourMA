import React from "react";

import "./Toolbar.css";

const toolbar = (props) => (
    <div className="header" id="header">
      {props.children}
    </div>
);

export default toolbar;
