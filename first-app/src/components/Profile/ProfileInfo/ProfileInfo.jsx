import React from "react";
import cls from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={cls.main_logo}
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/09/Looney-Tunes-64-Super-Daffy-Duck-Header.jpg"
          alt="main_img"
        />
      </div>
      <div className={cls.description}>ava + descriprion</div>
    </div>
  );
};

export default ProfileInfo
