import React from "react";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../Redux/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let addMessage = () => {
    let action = addMessageActionCreator()
    props.store.dispatch(action);
  }

  let onChange = (newText) => {
    let action = updateNewMessageTextActionCreator(newText);
    props.store.dispatch(action);
  }

  let state = props.store.getState();
  return (
    <Dialogs addMessage={addMessage} updateNewMessageText={onChange} messages={state.messagesPage.messagesData}
      newMessageText={state.messagesPage.newMessageText} dialogsData={state.messagesPage.dialogsData}/>
  );
};

export default DialogsContainer;
