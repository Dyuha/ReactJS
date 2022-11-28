// import { rerenderEntireTree } from "../index";
let rerenderEntireTree = () => {
  alert('State has been chenched')
}


const state = {
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
};

window.state = state;

export const addPost = () => {
  const newPost = {
    id: 8,
    message: state.profilePage.newPostText,
    likes: 3,
    dislikes: 11,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (postMessage) => {
  state.profilePage.newPostText = postMessage;
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;         // наблюдатель observer
}

export default state;
