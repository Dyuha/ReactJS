import React from "react";
import cls from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={cls.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;