import profileReducer, {addPost, deletePost} from './profileReducer.js';

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
  ]
};

test('profileReducer test adding new posts', () => {
  // 1. test data
  const action = addPost("hello first test")
  // 2. action
  const newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.postsData[7].message).toBe("hello first test");

});

test('delete post', () => {
  // 1. test data
  const action = deletePost(1)
  // 2. action
  const newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(6);

});

