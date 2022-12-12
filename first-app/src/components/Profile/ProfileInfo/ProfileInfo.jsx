import React from "react";
import cls from "./ProfileInfo.module.css";
import Preloader from "./../../../common/Preloader/Preloader"

const ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMKr2niqS_dZSo3NV8hpAiAwbIYHv-ifZMsoIq-NTQdmkQiKJrCajLFB7cw_mcVojSr0&usqp=CAU";

const ProfileInfo = ({profile}) => {

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
      <div className={cls.description}>
        <div>
          {<img src={profile.photos.large ? profile.photos.large : ava} alt="avatarka" className={cls.userAvatar}/>}
        </div>
        <div className={cls.mainInfo}>
          <div>{`Name: ${profile.fullName}`}</div>
          <div>{`Status: ${profile.aboutMe}`}</div>
          <div>{`Looking for a job: ${profile.lookingForAJobDescription}`}</div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ProfileInfo
