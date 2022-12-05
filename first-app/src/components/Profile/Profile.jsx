import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <main>
      <ProfileInfo />
      <div className={cls.posts}>
        <MyPostsContainer />
      </div>
    </main>
  );
};

export default Profile;
