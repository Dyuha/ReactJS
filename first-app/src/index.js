import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Egor" },
  { id: 3, name: "Vlad" },
  { id: 4, name: "Anton" },
  { id: 5, name: "Sveta" },
  { id: 6, name: "Misha" },
  { id: 7, name: "Lexa" },
];

const messagesData = [
  { id: 2, message: "Kak dela2?" },
  { id: 3, message: "Kak dela?" },
  { id: 1, message: "Kak dela!?" },
  { id: 4, message: "Kak dela?" },
  { id: 5, message: "Kak dela?" },
  { id: 6, message: "Kak dela!?" },
  { id: 7, message: "Kak dela?" },
];

const postData = [
  { id: 1, message: "My first post!", likes:12, dislikes:1},
  { id: 2, message: "My second first post!", likes:-30, dislikes:'infinity'},
  { id: 3, message: "Kak dela?" },
  { id: 4, message: "Kak dela?" },
  { id: 5, message: "Kak dela?" },
  { id: 6, message: "Kak dela?" },
  { id: 7, message: "Kak dela?" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialog={dialogsData} message={messagesData} post={postData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
