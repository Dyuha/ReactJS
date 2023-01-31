import React from "react";
import Paginator from "../../common/Paginator/Pagintor";
import User from "./User";


const Users = (props) => {
  return (
    <div style={{marginTop:'10px'}}>
      <Paginator totalItemsCount={props.totalUsersCount}
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
