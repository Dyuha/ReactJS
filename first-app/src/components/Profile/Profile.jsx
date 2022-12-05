import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({store}) => {
  return (
    <main>
      <ProfileInfo />
      <div className={cls.posts}>
        <MyPostsContainer store={store}/>
      </div>
    </main>
  );
};

export default Profile;
