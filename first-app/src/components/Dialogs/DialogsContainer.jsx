import {
  updateNewMessageText,
  addMessage,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const mapDispatchToProps = {
    updateNewMessageText,
    addMessage,
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
