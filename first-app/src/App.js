import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <Suspense fallback={<Preloader />}>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
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
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const mapDispatchToPrors = {
  initializeApp,
};

export default connect(mapStateToProps, mapDispatchToPrors)(App);
