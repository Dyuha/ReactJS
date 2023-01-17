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
    if (props.isOwner){
      setEditMode(true);
    }
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length){
      props.savePhoto(e.target.files[0]);
    } 
  }

  return (
    <div className={cls.description}>
      <div>
          <img src={props.profile.photos.large || ava} alt="avatarka" className={cls.userAvatar}/>
          <div>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
          </div>
      </div>
      <div className={cls.mainInfo}>
        <div>{`Name: ${props.profile.fullName}`}</div>
        <div>
          {editMode
            ? <div>Status: <input onChange={onStatusChange} onBlur={ deactivateEditMode } autoFocus={true} value={status}/></div> 
            : <span onClick={ activateEditMode } >{`Status: ${props.status} `}</span>
          }            
        </div>
        <div>{`Looking for a job: ${props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "No"}`}</div>
        {/* <div>{
              Object.keys(props.profile.contacts).map(key => <div><a href={props.profile.contacts[key]}>{props.profile.contacts[key] || "None"}</a></div>)
            }
        </div> */}
      </div>
    </div>
  );
}

export default ProfileStatusHooks;