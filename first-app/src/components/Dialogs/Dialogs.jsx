import React from "react";
import cls from "./Dialogs.module.css";
import NavLink from "../NavLink_V5/NavLink";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={cls.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={cls.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogs_items}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Egor" id="2" />
        <DialogItem name="Vlad" id="3" />
        <DialogItem name="Anton" id="4" />
        <DialogItem name="Sveta" id="5" />
        <DialogItem name="Misha" id="6" />
        <DialogItem name="Lexa" id="7" />
      </div>
      <div className={cls.messages}>
        <Message message="Kak dela?" />
        <Message message="Kak dela?" />
        <Message message="Kak dela?" />
        <Message message="Kak dela?" />
        <Message message="Kak dela?" />
        <Message message="Kak dela?" />
        <Message message="Kak dela?" />
      </div>
    </div>
  );
};

export default Dialogs;
