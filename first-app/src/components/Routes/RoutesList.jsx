import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import News from '../News/News';
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Users from "../Users/Users";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
const Dialogs = React.lazy(() =>
  import("../Dialogs/Dialogs")
);


export const RoutesList = () => {
  return (
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
  )
}
