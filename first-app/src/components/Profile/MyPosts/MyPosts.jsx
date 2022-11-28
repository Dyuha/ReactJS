import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postData = props.posts;
  const postElements = postData.map((post) => (
    <Post message={post.message} likes={post.likes} dislikes={post.dislikes} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {    
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div>New post</div>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            cols="60"
            rows="4"
            onChange={onPostChange}
            value={props.postText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div>My post</div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
