import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import state, { addPost, subscribe, updateNewPostText } from "./redux/state";


// addPost('addPost');
const root = ReactDOM.createRoot(document.getElementById("root"));

//костыли (пока что) ререндерим полностью наше дерево с новым state
export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      {/* <App dialogs={state.dialogsData} messages={state.messagesData} posts={state.postData} /> */}
      <App states={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
