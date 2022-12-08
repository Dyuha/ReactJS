import React from "react";
import cls from "./Navbar.module.css";
import NavLink from "../NavLink_V5/NavLink";

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.item}>
        <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/dialogs" activeClassName={cls.active}>Messages</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/users" activeClassName={cls.active}>Users</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/news" activeClassName={cls.active}>News</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/music" activeClassName={cls.active}>Misuc</NavLink>
      </div>
      <div className={cls.item}>
        <NavLink to="/settings" activeClassName={cls.active}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
