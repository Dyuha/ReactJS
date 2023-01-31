import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import cls from "./Header.module.css";
import NavLink from "../NavLink_V5/NavLink";

const Header = (props) => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseProfile = () => {
    setAnchorEl(null);
    <NavLink to={'/profile'}/>
  }
  
  const handleCloseLogout = () => {
    setAnchorEl(null);
    props.logout();
  };

  return (
    <AppBar>
      <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <Typography>
          DAFFY Social
        </Typography>
        <IconButton>
        {props.isAuth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleCloseProfile}>
                  <NavLink style={{textDecoration:'none', color:'black'}} to={'/profile'}>Profile
                  </NavLink> 
                </MenuItem>
                <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </IconButton>
      </Toolbar>
    </AppBar>

    // <div className={cls.header}>
    //   <img
    //     src="https://www.cartonionline.com/gif/CARTOON/warner%20bros/Daffy_duck.jpg"
    //     alt="logo"
    //   />
    //   <div className={cls.loginBlock}>
    //     { props.isAuth 
    //         ? <NavLink to={'/profile'}>{props.login}<div><button onClick={props.logout} >LOGOUT</button></div></NavLink>
    //         : <NavLink to={'/login'}>Login</NavLink>
    //     }
    //   </div>
    // </div>
  );
};

export default Header;
