import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  const postsData = props.postsData;

  const postElements = postsData.map((post) => (
    <Post message={post.message} likes={post.likes} dislikes={post.dislikes} key={post.id} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div>
      <div>New post</div>
      <NewPostFormRedux onSubmit={onAddPost}/>
      <div>My post</div>
      <div className={cls.posts}>{postElements}</div>
    </div>
  );
};

const NewPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newPostBody"} placeholder={"Enter new post"} cols="60" rows="4" />
        <div><button>Add post</button></div>
    </form>
  )
};

const NewPostFormRedux = reduxForm({form: "newPostForm"})(NewPostForm)

export default MyPosts;
