import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData
    .map( elem => <DialogItem name={elem.name} id={elem.id} ava={elem.ava} key={elem.id} />)

  let messagesElements = props.messages
    .map( message => <Message message={message.message} id={message.id} key={message.id}/>)
  let newMessage = React.createRef();
  
  let addMessage = () => {
    props.addMessage();
  }

  let onChange = () => {
    let newText = newMessage.current.value;
    props.updateNewMessageText(newText);
  }

    return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea ref={newMessage} onChange={onChange} value={props.newMessageText}></textarea>
        <button onClick={addMessage}>send</button>
      </div>
    </div>
  );
};

export default Dialogs;
