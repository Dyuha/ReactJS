import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>New post</div>
      <div>
        <div> <textarea cols="60" rows="4"></textarea></div>
        <button>Add post</button>
      </div>

      <div>My post</div>
      <div className={cls.posts}>
        <Post message="Something good!" likes="12" dislikes="1" />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
