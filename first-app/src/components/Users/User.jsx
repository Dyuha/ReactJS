import React from "react";
import cls from "./Users.module.css";
import { NavLink } from 'react-router-dom';


const imgDaffy =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iylbd8JfQmIVDTCNoi_UzGcV6TKOfRT7nw&usqp=CAU";

const User = ({user, follow, unfollow, isFollowing}) => {
  return (
    <div>
      <div className={cls.wrapper}>
        <div>
          <NavLink to={'/profile/'+user.id}>
            <img src={user.photos.small || imgDaffy} alt="avatar" className={cls.userAva} />
          </NavLink> 
        </div>
        <div>
        {user.followed 
          ? <button onClick={ () => unfollow(user.id) } disabled={isFollowing.some(id => id === user.id)} >UNFOLLOW</button> 
          : <button onClick={ () => follow(user.id) } disabled={isFollowing.some(id => id === user.id)} >FOLLOW</button>
        }
        </div>
          <div>{user.name}</div>
          <div>{user.status}</div>
          <div>{"user.location.city"}</div>
          <div>{"user.location.country"}</div>
      </div>
    </div>
  );
};

export default User;
