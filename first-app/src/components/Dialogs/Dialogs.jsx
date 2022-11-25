import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsData = props.dialogs;
  const messagesData = props.messages;
  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs_items}>{dialogsElements}</div>
      <div className={cls.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
