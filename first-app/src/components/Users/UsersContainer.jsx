import React from "react";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setIsFollowing,
  getUsersThunkCreator,
  setCurrentPageThunkCreator,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";



class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  };
  
  onPageChange = (page) => {
    this.props.setCurrentPageThunkCreator(page, this.props.pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChange={this.onPageChange}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          setIsFollowing={this.props.setIsFollowing}
          isFollowing={this.props.isFollowing}
        />      
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setIsFollowing,
  getUsersThunkCreator,
  setCurrentPageThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);