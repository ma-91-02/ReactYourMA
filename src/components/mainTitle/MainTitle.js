import React, { Children } from "react";
import "./MainTitle.scss";


const MainTitle = (props)=>{
    return <h2 className="main-title">{props.children}</h2>
}

export default MainTitle;