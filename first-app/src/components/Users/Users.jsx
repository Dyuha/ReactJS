import React from "react";
import cls from "./Users.module.css";
import NavLink from "./../NavLink_V5/NavLink"


const imgDaffy =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iylbd8JfQmIVDTCNoi_UzGcV6TKOfRT7nw&usqp=CAU";

const Users = (props) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [...Array(pageCount)].map((_, b) => (b += 1));

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={() => props.onPageChange(p)}
              className={props.currentPage === p && cls.selectedPage}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
            <div key={u.id} className={cls.wrapper}>
                <div>
                  <NavLink to={'/profile/'+u.id}>
                    <img src={u.photos.small || imgDaffy} alt="avatar" className={cls.userAva} />
                  </NavLink> 
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
