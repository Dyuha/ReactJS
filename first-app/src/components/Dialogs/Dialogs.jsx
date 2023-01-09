import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

  const dialogsData = props.messagesPage.dialogsData;
  const messagesData = props.messagesPage.messagesData;
  // const newMessageText = props.messagesPage.newMessageText;

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  const messagesElements = messagesData.map((message) => (
    <Message message={message.message || "empty message"} key={message.id} />
  ));

  // const addMessage = () => {
  //   props.addMessage();
  // };

  // const onMessageChange = (event) => {
  //   const text = event.target.value;
  //   props.updateNewMessageText(text);
  // };

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs_items}>{dialogsElements}</div>
      <div className={cls.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter new message"} cols="30" rows="10"/>
      <button>Add Message</button>
    </form>
  )
}; 

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
