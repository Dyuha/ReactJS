import React, { Suspense, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./common/Preloader/Preloader";
import Header from "./components/Header/Header";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }
  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile/" element={<Navigate to="/login" />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:userID" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const mapDispatchToPrors = {
  initializeApp,
};

export default connect(mapStateToProps, mapDispatchToPrors)(App);
