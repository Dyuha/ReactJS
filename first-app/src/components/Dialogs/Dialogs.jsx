import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  // const state = store.getState();
  // const dialogsData = state.messagesPage.dialogsData;
  // const messagesData = state.messagesPage.messagesData;
  // const newMessageText = state.messagesPage.newMessageText;

  const dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = props.messagesData.map((message) => (
    <Message message={message.message || "empty message"} />
  ));

  const addMessage = () => {
    props.addMessage();
    // store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (event) => {
    const text = event.target.value;
    props.updateNewMessageText(text);
    // const action = updateNewMessageTextActionCreator(text);
    // store.dispatch(action);
  };

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs_items}>{dialogsElements}</div>
      <div className={cls.messages}>{messagesElements}</div>
      <button onClick={addMessage}>Add Message</button>
      <textarea
        cols="30"
        rows="10"
        onChange={onMessageChange}
        placeholder="New Message"
        value={props.newMessageText}
      />
    </div>
  );
};

export default Dialogs;
