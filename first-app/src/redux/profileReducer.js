import  { usersAPI, profileAPI }  from '../API/API';
const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
  postsData: [
    { id: 1, message: "My first post!", likes: 12, dislikes: 1 },
    {
      id: 2,
      message: "My second first post!",
      likes: -30,
      dislikes: "infinity",
    },
    { id: 3, message: "Kak dela?" }, 
    { id: 4, message: "Kak dela?" },
    { id: 5, message: "Kak dela?" },
    { id: 6, message: "Kak dela?" },
    { id: 7, message: "Kak dela?" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      const newPost = {
        id: 8,
        message: action.newPostBody,
        likes: 1,
        dislikes: -10,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    }  
    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      } 
    }
    case SET_STATUS: {
      return {
        ...state, status: action.status
      }
    } 
    case DELETE_POST: {
      return {
        ...state, postsData: state.postsData.filter( p => p.id !== action.postID)
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state, profile: {...state.profile, photos: action.photos}
      }
    } 
    default:
      return state;
  }
};

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postID) => ({ type: DELETE_POST, postID });
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userID) => async dispatch => {
  try {
    const data = await usersAPI.getUserProfile(userID)
    dispatch(setUserProfile(data));
  } catch(error) {
    console.log(error)
  }
};

export const getStatus = (userID) => async dispatch => {
  try {
    const data = await profileAPI.getStatus(userID)
    dispatch(setStatus(data));
  } catch(error) {
    console.log(error)
  }  
};

export const updateStatus = (status) => async dispatch => {
  try {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0){
      dispatch(setStatus(status))
    }
  } catch(error) {
    console.log(error)
  }
};

export const savePhoto = (photo) => async dispatch => {
  try {
    const data = await profileAPI.savePhoto(photo);
    if (data.resultCode === 0){
      dispatch(savePhotoSuccess(data.data.photos))
    }  
  } catch(error) {
    console.log(error)
  }
};

export default profileReducer;