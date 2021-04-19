import React from "react";
import { LogotypeFamily, LogotypeImg } from "./styles";


const Logo = (props) => {
    return (
        <LogotypeFamily>
        <LogotypeImg src={props.img} alt="logo"/>
        <h1>{props.companyLogo}</h1>
    </LogotypeFamily>
    )
}

export default Logo;