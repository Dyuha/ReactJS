import React from "react";
// import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/authReducer';
import { useNavigate } from "react-router-dom";
import cls from "./Header.module.css";

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, MessageOutlined, TeamOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  // getItem('', '', <div className={cls.buffer}/>),
  getItem('Profile', '/profile', <UserOutlined />),
];



const _Header = () => {

  const navigate = useNavigate()

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      {/* заменить items на Menu.Item для кастомизации */}
    <Menu onClick={ ({key}) => navigate(key)} 
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      className={cls.header}
      />

    </Header>
    
  )
  
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const isAuth = useSelector(state => state.auth.isAuth);
  // const dispatch = useDispatch();

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  
  // const handleCloseLogout = () => {
  //   setAnchorEl(null);
  //   dispatch(logout());
  // };

  // return (
  //   <AppBar >
  //     <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
  //       <Typography>
  //         DAFFY Social
  //       </Typography>
  //       <div>
  //       {isAuth && (
  //           <div>
  //             <IconButton
  //               size="large"
  //               aria-label="account of current user"
  //               aria-controls="menu-appbar"
  //               aria-haspopup="true"
  //               onClick={handleMenu}
  //               color="inherit"
  //             >
  //               <AccountCircle />
  //             </IconButton>
  //             <Menu
  //               id="menu-appbar"
  //               anchorEl={anchorEl}
  //               anchorOrigin={{
  //                 vertical: 'top',
  //                 horizontal: 'right',
  //               }}
  //               keepMounted
  //               transformOrigin={{
  //                 vertical: 'top',
  //                 horizontal: 'right',
  //               }}
  //               open={Boolean(anchorEl)}
  //               onClose={handleClose}
  //             >
  //               <MenuItem onClick={handleClose}>
  //                 <NavLink style={{textDecoration:'none', color:'black'}} 
  //                          to={'/profile'}> Profile </NavLink> 
  //               </MenuItem>
  //               <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
  //             </Menu>
  //           </div>
  //         )}
  //       </div>
  //     </Toolbar>
  //   </AppBar>
  // );
};

export default _Header;
