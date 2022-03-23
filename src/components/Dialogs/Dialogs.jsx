import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../Redux/state'

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData
    .map( elem => <DialogItem name={elem.name} id={elem.id} ava={elem.ava}/>)

  let messagesElements = props.state.messagesData
    .map( message => <Message message={message.message} id={message.id} />)
  let newMessage = React.createRef();
  
  let addMessage = () => {
    let action = addMessageActionCreator()
    props.dispatch(action);
  }

  let onChange = () => {
    let newText = newMessage.current.value;
    let action = updateNewMessageTextActionCreator(newText);
    props.dispatch(action);
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
        <textarea ref={newMessage} onChange={onChange} value={props.state.newMessageText}></textarea>
        <button onClick={addMessage}>send</button>
      </div>
    </div>
  );
};

export default Dialogs;
