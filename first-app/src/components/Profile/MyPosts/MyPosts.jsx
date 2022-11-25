import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postData = props.posts;

  const postElements = postData.map((post) => (
    <Post message={post.message} likes={post.likes} dislikes={post.dislikes} />
  ));

  return (
    <div>
      <div>New post</div>
      <div>
        <div>
          {" "}
          <textarea cols="60" rows="4"></textarea>
        </div>
        <button>Add post</button>
      </div>

      <div>My post</div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
