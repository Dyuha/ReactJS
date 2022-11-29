import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, postText, dispatch}) => {
  return (
    <main>
      <ProfileInfo />
      <div className={cls.posts}>
        <MyPosts posts={posts} postText={postText} dispatch={dispatch}/>
      </div>
    </main>
  );
};

export default Profile;
