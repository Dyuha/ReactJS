import React from "react";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  const state = store.getState();
  const dialogsData = state.messagesPage.dialogsData;
  const messagesData = state.messagesPage.messagesData;
  const newMessageText = state.messagesPage.newMessageText;

  const addMessage = () => {
    store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text) => {
    const action = updateNewMessageTextActionCreator(text);
    store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      dialogsData={dialogsData}
      messagesData={messagesData}
      newMessageText={newMessageText}
    />
  );
};

export default DialogsContainer;
