import React from "react";
import { NavLink } from "react-router-dom";
import classes from'./Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeclassname={classes.actived}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeclassname={classes.actived}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeclassname={classes.actived}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeclassname={classes.actived}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeclassname={classes.actived}>Settings</NavLink>
      </div>
    </nav>
  );
};
export default Nav;
