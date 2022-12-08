import React from "react";
import cls from "./Users.module.css";
import axios from "axios"

const imgDaffy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iylbd8JfQmIVDTCNoi_UzGcV6TKOfRT7nw&usqp=CAU"

const Users = (props) => {

	if ( props.users.length === 0 ){
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
			debugger
			props.setUsers(response.data.items);
		});
	};

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={cls.wrapper}>
            <div>
              <img src={u.photos.small || imgDaffy} alt="avatar" className={cls.userAva} />
            </div>
            <div>
            {u.followed 
              ? <button onClick={ () => { props.unfollow(u.id) } }>UNFOLLOW</button> 
              : <button onClick={ () => { props.follow(u.id) } }>FOLLOW</button>}
            </div>
              <div>{u.name}</div>
              <div>{u.status}</div>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
