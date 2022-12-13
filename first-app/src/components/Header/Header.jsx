import React from "react";
import cls from "./Header.module.css";
import NavLink from "../NavLink_V5/NavLink";

const Header = (props) => {
  return (
    <header className={cls.header}>
      <img
        src="https://www.cartonionline.com/gif/CARTOON/warner%20bros/Daffy_duck.jpg"
        alt="logo"
      />
      <div className={cls.loginBlock}>
        { props.isAuth 
            ? <NavLink to={'/profile'}>{props.login}</NavLink>
            : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
