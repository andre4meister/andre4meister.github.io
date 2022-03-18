import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData
    .map( elem => <DialogItem name={elem.name} id={elem.id} ava={elem.ava}/>)

  let messagesElements = props.state.messagesData
    .map( message => {
      return <Message message={message.message} id={message.id} 
        newMessageText={props.state.newMessageText} updateNewMessageText={props.updateNewMessageText}/>
})
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
