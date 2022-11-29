let store = {
  _state : {
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
      newPostText: 'Some Post Text!!!',
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    alert('State has been chenched')
  },
  addPost() {
    const newPost = {
      id: 8,
      message: this._state.profilePage.newPostText,
      likes: 3,
      dislikes: 11,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(postMessage) {
    this._state.profilePage.newPostText = postMessage;
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer;         // наблюдатель observer
  },
}

window.store = store;

export default store;
