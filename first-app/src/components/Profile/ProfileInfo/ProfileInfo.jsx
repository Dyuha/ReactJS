import React from "react";
import cls from "./ProfileInfo.module.css";
import Preloader from "./../../../common/Preloader/Preloader"
import ProfileStatusHooks from './ProfileStatusHooks';


const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {
  if(!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img
          className={cls.main_logo}
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/09/Looney-Tunes-64-Super-Daffy-Duck-Header.jpg"
          alt="main_img"
        />
      </div>
      <ProfileStatusHooks isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} savePhoto={savePhoto}/>
    </div>
  );
};

export default ProfileInfo
