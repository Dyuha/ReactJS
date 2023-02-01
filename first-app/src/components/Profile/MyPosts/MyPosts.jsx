import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPost } from "../../../redux/profileReducer";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from "../../../common/FormsControll/FormsControll";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MyPosts = () => {

  const postsData = useSelector(state => state.profilePage.postsData);
  const dispatch = useDispatch();

  const postElements = postsData.map((post) => (
    <Post message={post.message} likes={post.likes} dislikes={post.dislikes} key={post.id} />
  ));

  const onAddPost = (values) => {
    dispatch(addPost(values.newPostBody))
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

const maxLength = maxLengthCreator(300);

const NewPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newPostBody"} placeholder={"Enter new post"} 
          cols="60" rows="4" validate={[maxLength]}/>
        <div><button>Add post</button></div>
    </form>
  )
};

const NewPostFormRedux = reduxForm({form: "newPostForm"})(NewPostForm)

export default MyPosts;
