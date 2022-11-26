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

export default state;
