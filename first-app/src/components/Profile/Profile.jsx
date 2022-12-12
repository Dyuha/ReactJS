import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile}) => {
  return (
    <main>
      <ProfileInfo profile={profile}/>
      <div className={cls.posts}>
        <MyPostsContainer />
      </div>
    </main>
  );
};

export default Profile;
