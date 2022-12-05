const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
  newPostText: "Some Post Text!!!",
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:{
      const newPost = {
        id: 8,
        message: state.newPostText,
        likes: 3,
        dislikes: 11,
      };
      const copyState = {...state};
      copyState.postsData = [...state.postsData];
      copyState.postsData.push(newPost);
      copyState.newPostText = "";
      return copyState;
    }  
    case UPDATE_NEW_POST_TEXT:{
      const copyState = {...state};
      copyState.newPostText = action.postMessage;
      return copyState;
    }  
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    postMessage: text,
  };
};

export default profileReducer;
