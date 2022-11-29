import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/state'

const Dialogs = (props) => {
  const dialogsData = props.dialogs;
  const messagesData = props.messages;
  const newMessageText = props.newMessageText

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = messagesData.map((message) => (
    <Message message={message.message || 'empty message'} />
  ));

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    const action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs_items}>{dialogsElements}</div>
      <div className={cls.messages}>{messagesElements}</div>
      <button onClick={addMessage}>Add Message</button>
      <textarea ref={newMessageElement} cols="30" rows="10" 
        onChange={onMessageChange} 
        value={newMessageText}/>
    </div>
  );
};

export default Dialogs;
