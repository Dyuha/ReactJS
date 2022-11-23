import React from "react";
import cls from "./Header.module.css";

const Header = () => {
    return (
    <header className={cls.header}>
        <img src="https://www.cartonionline.com/gif/CARTOON/warner%20bros/Daffy_duck.jpg" alt="logo"/>
    </header>
    );
}

export default Header;