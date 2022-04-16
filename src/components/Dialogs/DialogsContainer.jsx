
import { connect } from "react-redux";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (newText) => {
      let action = updateNewMessageTextActionCreator(newText);
      dispatch(action);
    },
    addMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    }
  }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
