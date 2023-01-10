import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/" element={<Navigate to="/login" />}/>
            <Route path="/dialogs/*" element={<DialogsContainer />}/>
            <Route path="/profile/:userID" element={<ProfileContainer />}/>
            <Route path="/users" element={<UsersContainer />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
