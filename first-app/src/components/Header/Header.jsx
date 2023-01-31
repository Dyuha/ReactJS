import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { connect } from "react-redux";
import { logout } from '../../redux/authReducer';
// import cls from "./Header.module.css";
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

