const ADD_MESSAGE = "dialogs/ADD_MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      const newMessage = {
        id: 8,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    }  
    default:
      return state;
  }
};

export const addMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;
