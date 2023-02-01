import React, { Suspense, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./common/Preloader/Preloader";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
const Dialogs = React.lazy(() =>
  import("./components/Dialogs/Dialogs")
);

const App = () => {

  const dispatch = useDispatch();
  const initialized = useSelector( state => state.app.initialized )

  useEffect(() => {
    dispatch(initializeApp()); // eslint-disable-next-line
  }, []);

  if (!initialized) {
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
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/profile/:userID" element={<Profile />} />
            <Route path="/users" element={<Users />} />
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

export default App
