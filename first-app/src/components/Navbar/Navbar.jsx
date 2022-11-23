import React from "react";
import cls from "./Navbar.module.css";

const Navbar = () => {
    return (
      <nav className={cls.navbar}>
        <div className={cls.item}><a>Messages</a></div>
        <div className={cls.item}><a>News</a></div>
        <div className={cls.item}><a>Misuc</a></div>
        <div className={cls.item}><a>Settings</a></div>  
      </nav>
    );
}

export default Navbar;