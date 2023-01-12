import  { usersAPI, profileAPI }  from '../API/API';
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"

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
    default:
      return state;
  }
};

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postID) => ({ type: DELETE_POST, postID });

export const getUserProfile = (userID) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userID)
      .then((data) => {
        dispatch(setUserProfile(data));
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export const getStatus = (userID) => {
  return (dispatch) => {
    profileAPI.getStatus(userID)
      .then((data) => {
        dispatch(setStatus(data));
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0){
          dispatch(setStatus(status))
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export default profileReducer;