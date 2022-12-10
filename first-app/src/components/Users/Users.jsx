import React from "react";
import cls from "./Users.module.css";
import axios from "axios"

const imgDaffy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iylbd8JfQmIVDTCNoi_UzGcV6TKOfRT7nw&usqp=CAU"

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
				this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
			});
  };
  
  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then( response => {
				this.props.setUsers(response.data.items);
			});
  }

  render() {
    const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [...Array(pageCount)].map((_, b) => b+=1)
    return (
      <div>
        <div>
          {pages.map(p => {
              return (
                <span onClick={ () => this.onPageChange(p) } 
                      className={this.props.currentPage === p && cls.selectedPage}>{p} </span>
              )
            })
          }
        </div>
        
        {this.props.users.map((u) => (
          <div key={u.id} className={cls.wrapper}>
              <div>
                <img src={u.photos.small || imgDaffy} alt="avatar" className={cls.userAva} />
              </div>
              <div>
              {u.followed 
                ? <button onClick={ () => { this.props.unfollow(u.id) } }>UNFOLLOW</button> 
                : <button onClick={ () => { this.props.follow(u.id) } }>FOLLOW</button>}
              </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default Users;
