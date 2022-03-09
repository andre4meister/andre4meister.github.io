import s from "./Dialogs.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
  
    let dialogsData = [
      {id: 1, name: 'Andrii'},
      {id: 2, name: 'Dima'},
      {id: 3, name: 'Marik'},
      {id: 4, name: 'Vova'},
      {id: 5, name: 'Roman'},
      {id: 6, name: 'Bohdan'},
  ];

  let dialogsElements = dialogsData.map( elem => <DialogItem name={elem.name} id={elem.id}/>)
 
  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your dog?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'Bye'},
    {id: 6, message: 'QQ'},
] 

  let messagesElements = messagesData
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
