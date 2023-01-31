import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPost } from "../../../redux/profileReducer";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from "../../../common/FormsControll/FormsControll";
import { connect } from 'react-redux';

const MyPosts = ({postsData, addPost}) => {
  const postElements = postsData.map((post) => (
    <Post message={post.message} likes={post.likes} dislikes={post.dislikes} key={post.id} />
  ));

  const onAddPost = (values) => {
    addPost(values.newPostBody)
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

const maxLength = maxLengthCreator(10);

const NewPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newPostBody"} placeholder={"Enter new post"} 
          cols="60" rows="4" validate={[requiredField, maxLength]}/>
        <div><button>Add post</button></div>
    </form>
  )
};

const NewPostFormRedux = reduxForm({form: "newPostForm"})(NewPostForm)

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

const mapDispatchToProps = {
  addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
