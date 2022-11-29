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

  const newMessageElement = React.createRef();

  const addMessage = () => {
    const message = newMessageElement.current.value;
    alert(message);
  }

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs_items}>{dialogsElements}</div>
      <div className={cls.messages}>{messagesElements}</div>
      <textarea ref={newMessageElement} cols="30" rows="10"></textarea>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
};

export default Dialogs;
