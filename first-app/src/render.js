import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";


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

