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

const App = ({states, dispatch}) => {
  const dialogs = states.messagesPage.dialogsData;
  const messages = states.messagesPage.messagesData;
  const posts = states.profilePage.postsData;
  const postText = states.profilePage.newPostText;
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
              dispatch={dispatch}/>}/>
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
