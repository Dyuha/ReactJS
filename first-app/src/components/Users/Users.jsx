import React from "react";
import cls from "./Users.module.css";
import axios from "axios"

const Users = (props) => {

	if ( props.users.length === 0 ){
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
			debugger
			props.setUsers();
		});
	};

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avaURL} alt="avatar" className={cls.userAva} />
            </div>
            <div>
            {u.followed 
              ? <button onClick={ () => { props.unfollow(u.id) } }>UNFOLLOW</button> 
              : <button onClick={ () => { props.follow(u.id) } }>FOLLOW</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
