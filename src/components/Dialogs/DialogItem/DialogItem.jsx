import s from "../Dialogs.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <img src={props.ava} className={s.ava} alt='FriendAva'></img>
      <NavLink className={s.name} to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
