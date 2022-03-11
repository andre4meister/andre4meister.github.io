import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
  return (
    <div className={s.messages}>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Message;
