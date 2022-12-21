import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  debugger
  const dialogsData = props.messagesPage.dialogsData;
  const messagesData = props.messagesPage.messagesData;
  const newMessageText = props.messagesPage.newMessageText;

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  const messagesElements = messagesData.map((message) => (
    <Message message={message.message || "empty message"} key={message.id} />
  ));

  const addMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (event) => {
    const text = event.target.value;
    props.updateNewMessageText(text);
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
        value={newMessageText}
      />
    </div>
  );
};

export default Dialogs;
