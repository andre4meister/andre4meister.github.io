import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className="header-img"
        src="https://findicons.com/files/icons/1066/orb/300/adobe_photoshop.png"
        alt="photoheader"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        
      </div>
    </header>
  );
};
export default Header;
