
import { connect } from "react-redux";
import { compose } from "redux";
import {
  addMessageActionCreator,
} from "../../Redux/dialogs-reducer.ts";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    messages: state.messagesPage.messagesData,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      let action = addMessageActionCreator(newMessageBody);
      dispatch(action);
    }
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
