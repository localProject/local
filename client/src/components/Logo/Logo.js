import React from "react";
import "./Logo.css";
import localLogo from "./local-logo.png";

const Logo = props => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm">
                <img src={localLogo} alt="local. Logo" className="local-logo" />
            </div>
            <div className="col-sm copyright">
                &copy; 2018 local.
            </div>
        </div>
    </div>
);

export default Logo;