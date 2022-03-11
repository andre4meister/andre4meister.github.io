import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData
    .map( elem => <DialogItem name={elem.name} id={elem.id}/>)

  let messagesElements = props.messagesData
    .map( message => <Message message={message.message} id={message.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
