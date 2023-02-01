import React, { useEffect } from "react";
import MyPosts from "./MyPosts/MyPosts";
import cls from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../redux/profileReducer";


const Profile = (props) => {

  const dispatch = useDispatch();
  const { userID } = useParams(); // eslint-disable-next-line
  const isOwner = useSelector(state => userID == state.auth.userID);
  const profile = useSelector(state => state.profilePage.profile);
  const status = useSelector(state => state.profilePage.status);
  
  const _updateStatus = (status) => {
    dispatch(updateStatus(status));
  };

  const _savePhoto = (photo) => {
    dispatch(savePhoto(photo));
  };

  useEffect( () => {
    dispatch(getUserProfile(userID));
    dispatch(getStatus(userID)); // eslint-disable-next-line
  }, []);

  return (
    <main>
      <ProfileInfo isOwner={isOwner} 
                   profile={profile}
                   status={status} 
                   updateStatus={_updateStatus} 
                   savePhoto={_savePhoto}/>
      <div className={cls.posts}>
        <MyPosts />
      </div>
    </main>
  );
};
 
export default withAuthRedirect(Profile)
