import React from "react";
import logo from './img/logo/flag-400.png';


const Header = () => {
    return (
        <div className="ui secondary  menu">
  <a className="item link logo">
   Interns &nbsp;
   <div className="logo_img"><img src={logo}/></div>
  </a>
  <div className="right menu">
    <a className="item link">
      Dashboard
    </a>
    <a className="item link">
      Profile
    </a>
    <a className="active item logout-btn">
      Logout
    </a>
  </div>
</div>

    )
}

export default Header