const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogsData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Egor" },
    { id: 3, name: "Vlad" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Sveta" },
    { id: 6, name: "Misha" },
    { id: 7, name: "Lexa" },
  ],
  messagesData: [
    { id: 1, message: "Kak dela?" },
    { id: 2, message: "Kak dela11212?" },
    { id: 3, message: "Kak dela?" },
    { id: 4, message: "Kak dela?" },
    { id: 5, message: "Kak dela?" },
    { id: 6, message: "Kak dela?" },
    { id: 7, message: "Kak dela?" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      const newMessage = {
        id: 8,
        message: state.newMessageText,
      };
      const copyState = {...state};
      copyState.messagesData = [...state.messagesData];
      copyState.messagesData.push(newMessage);
      copyState.newMessageText = "";
      return copyState;
    }  
    case UPDATE_NEW_MESSAGE_TEXT:{
      const copyState = {...state};
      copyState.newMessageText = action.dialogMessage;
      return copyState;
    }  
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    dialogMessage: text,
  };
};

export default dialogsReducer;
