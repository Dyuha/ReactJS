import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { connect } from "react-redux";
import { logout } from '../../redux/authReducer';
import { NavLink } from "react-router-dom";
// import cls from "./Header.module.css";

const Header = (props) => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
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
        <div>
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
                <MenuItem onClick={handleClose}>
                  <NavLink style={{textDecoration:'none', color:'black'}} 
                           to={'/profile'}> Profile </NavLink> 
                </MenuItem>
                <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
  }
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

