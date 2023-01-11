import React from "react";
import { useState, useEffect } from "react";
import cls from "./ProfileInfo.module.css";


const ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMKr2niqS_dZSo3NV8hpAiAwbIYHv-ifZMsoIq-NTQdmkQiKJrCajLFB7cw_mcVojSr0&usqp=CAU";

const ProfileStatusHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={cls.description}>
      <div>
        {
          <img
            src={props.profile.photos.large ? props.profile.photos.large : ava}
            alt="avatarka"
            className={cls.userAvatar}
          />
        }
      </div>
      <div className={cls.mainInfo}>
        <div>{`Name: ${props.profile.fullName}`}</div>
        <div>
          {editMode
            ? <div>Status: <input onChange={onStatusChange} onBlur={ deactivateEditMode } autoFocus={true} value={status}/></div> 
            : <span onClick={ activateEditMode } >{`Status: ${props.status} `}</span>
          }            
        </div>
        <div>{`Looking for a job: ${props.profile.lookingForAJobDescription}`}</div>
      </div>
    </div>
  );
}

export default ProfileStatusHooks;