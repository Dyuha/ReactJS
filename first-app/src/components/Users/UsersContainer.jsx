import React from "react";
import {
  getUsers,
  setNewCurrentPage,
  unfollow,
  follow,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowing, getUsersSelector } from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };
  
  onPageChange = (page) => {
    this.props.setNewCurrentPage(page, this.props.pageSize)
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
          isFollowing={this.props.isFollowing}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />      
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isFollowing: state.usersPage.isFollowing,
//   };
// };

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state),
  }
};

const mapDispatchToProps = {
  getUsers,
  setNewCurrentPage,
  unfollow,
  follow,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersContainer);