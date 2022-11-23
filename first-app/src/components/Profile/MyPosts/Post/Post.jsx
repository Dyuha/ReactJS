import React from "react";
import cls from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={cls.wrapper}>
        <div className={cls.avatar_holder}>
          <img
            className={cls.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMKr2niqS_dZSo3NV8hpAiAwbIYHv-ifZMsoIq-NTQdmkQiKJrCajLFB7cw_mcVojSr0&usqp=CAU"
            alt="avatar"
          />
        </div>
        <div className={cls.item}>post 1</div>
      </div>
      <span>like </span>
      <span>dislike</span>
    </div>
  );
};

export default Post;
