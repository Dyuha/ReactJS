import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsData = props.postsData;

  const postElements = postsData.map((post) => (
    <Post message={post.message} likes={post.likes} dislikes={post.dislikes} key={post.id} />
  ));

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (event) => {
    const text = event.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div>New post</div>
      <div>
        <div>
          <textarea
            cols="60"
            rows="4"
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>

      <div>My post</div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
