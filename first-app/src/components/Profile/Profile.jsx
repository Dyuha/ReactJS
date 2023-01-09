import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({profile, status, updateStatus}) => {
  return (
    <main>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
      <div className={cls.posts}>
        <MyPostsContainer />
      </div>
    </main>
  );
};
 
export default Profile;
