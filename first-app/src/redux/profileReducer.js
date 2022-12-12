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
        likes: 1,
        dislikes: -10,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    }  
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText: action.postMessage,
      };
    }  
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, postMessage: text });

export default profileReducer;
