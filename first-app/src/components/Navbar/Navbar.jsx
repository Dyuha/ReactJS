import React from "react";
import cls from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? cls.active : ''}>Profile</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? cls.active : ''}>Messages</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/users" className={({ isActive }) => isActive ? cls.active : ''}>Users</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/news" className={({ isActive }) => isActive ? cls.active : ''}>News</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/music" className={({ isActive }) => isActive ? cls.active : ''}>Misuc</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/settings" className={({ isActive }) => isActive ? cls.active : ''}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
