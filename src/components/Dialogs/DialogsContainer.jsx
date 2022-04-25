
import { connect } from "react-redux";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../Redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
