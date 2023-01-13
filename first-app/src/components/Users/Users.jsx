import React from "react";
import Paginator from "../../common/Paginator/Pagintor";
import User from "./User";


const Users = (props) => {
  return (
    <div>
      <Paginator totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChange={props.onPageChange}
                currentPage={props.currentPage}/>
      {props.users.map( user => (
        <User user={user} 
              follow={props.follow} 
              unfollow={props.unfollow} 
              isFollowing={props.isFollowing}/>
      ))}
    </div>
  );
};


export default Users;
