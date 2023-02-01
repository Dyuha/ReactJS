import React from "react";
import cls from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControll/FormsControll";
import { requiredField, maxLengthCreator } from "../../utils/validators/validators";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../../redux/dialogsReducer";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const Dialogs = (props) => {

  const dispatch = useDispatch();
  const dialogsData = useSelector(state => state.messagesPage.dialogsData);
  const messagesData = useSelector(state => state.messagesPage.messagesData);

  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  const messagesElements = messagesData.map((message) => (
    <Message message={message.message || "empty message"} key={message.id} />
  ));

  const addNewMessage = (values) => {
    dispatch(addMessage(values.newMessageBody));
  };

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs_items}>{dialogsElements}</div>
      <div className={cls.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength = maxLengthCreator(150);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"newMessageBody"}
        placeholder={"Enter new message"}
        validate={[requiredField, maxLength]}
        cols="30"
        rows="10"
      />
      <button>Add Message</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default withAuthRedirect(Dialogs);
