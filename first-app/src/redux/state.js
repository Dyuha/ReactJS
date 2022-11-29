const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
  _state: {
    profilePage: {
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
    },
    messagesPage: {
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
      newMessageText: "New Message..."
    },
  },
  _callSubscriber() {
    alert("State has been chenched");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель observer
  },
  _addPost() {
    const newPost = {
      id: 8,
      message: this._state.profilePage.newPostText,
      likes: 3,
      dislikes: 11,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(postMessage) {
    this._state.profilePage.newPostText = postMessage;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    const newMessage = {
      id: 8,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messagesData.push(newMessage);
    this._state.messagesPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  dispatch(action) { // action - объект { type: 'ADD-POST', message: 'new message', ... }
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.postMessage);
    } else if (action.type === ADD_MESSAGE) {
      this._addMessage();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateNewMessageText(action.dialogMessage);
    }
  },
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

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  }
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    dialogMessage: text,
  };
};


window.store = store;

export default store;
