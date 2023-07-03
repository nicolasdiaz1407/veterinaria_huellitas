import React from "react";
import "../Styles/header.css";
import Logoheader from "../Img/Mi proyecto (1).png";

const Header = () => {
  return (
    <div>
            <div className="iimg-header">
              <img src={Logoheader} alt="" className="img-header"/>
            </div>
    </div>
  );
};

export default Header;
