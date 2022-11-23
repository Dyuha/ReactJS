import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import cls from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={cls.content}>
      <div>
        <img
          className={cls.main_logo}
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/09/Looney-Tunes-64-Super-Daffy-Duck-Header.jpg"
          alt="main_img"
        />
      </div>
      <div>ava + descriprion</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
