import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const posts = props.posts;
  return (
    <main>
      <ProfileInfo />
      <div className={cls.posts}>
        <MyPosts posts={posts} />
      </div>
    </main>
  );
};

export default Profile;
