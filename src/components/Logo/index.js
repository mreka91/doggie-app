import React from "react";
import "./index.css";

const Logo = (props) => {
    return (
        <div className="logotype">
        <img src={props.img} alt="logo"/>
        <h1>{props.companyLogo}</h1>
    </div>
    )
}

export default Logo;