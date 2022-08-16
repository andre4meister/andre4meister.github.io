import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { TextArea } from "../common/FormControls/FormsControls.tsx";
import { maxLengthCreator, required } from "../../utils/validators/validators.ts";

const maxLength = maxLengthCreator(10);
const Dialogs = (props) => {
  let dialogsElements = props.dialogsData
    .map( elem => <DialogItem name={elem.name} id={elem.id} ava={elem.ava} key={elem.id} />)

  let messagesElements = props.messages
    .map( message => <Message message={message.message} id={message.id} key={message.id}/>)

    
  let addNewMessage = (values) => {
    console.log(values.newMessageBody);
    props.addMessage(values.newMessageBody);
  }

    return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea} name='newMessageBody' placeholder="Write your message"
        validate={[required, maxLength]}/>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;
