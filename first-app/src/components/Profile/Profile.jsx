import React from "react";
import MyPostsContainer from "./MyPosts/MyPosts";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({isOwner, profile, status, updateStatus, savePhoto}) => {
  return (
    <main>
      <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} savePhoto={savePhoto}/>
      <div className={cls.posts}>
        <MyPostsContainer />
      </div>
    </main>
  );
};
 
export default Profile;
