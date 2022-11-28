import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  const dialogs = props.states.messagesPage.dialogsData;
  const messages = props.states.messagesPage.messagesData;
  const posts = props.states.profilePage.postsData;
  const postText = props.states.profilePage.newPostText;
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="" element={<Navigate to="/profile" />}/>
            <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
            <Route path="/profile" element={<Profile posts={posts} postText={postText} 
              updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>}/>
            <Route path="/news" element={<News />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
