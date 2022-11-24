import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <main>
      <ProfileInfo />
      <div className={cls.posts}>
      <MyPosts />
      </div>
    </main>
  );
};

export default Profile;
