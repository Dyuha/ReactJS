import React, { useEffect } from "react";
import { getUsers, setNewCurrentPage, unfollow, follow } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowing, getUsersSelector } from "../../redux/usersSelectors";

const UsersContainer = (props) => {
  
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  const onPageChange = (page) => {
    props.setNewCurrentPage(page, props.pageSize);
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        onPageChange={onPageChange}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        users={props.users}
        isFollowing={props.isFollowing}
        unfollow={props.unfollow}
        follow={props.follow}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state),
  };
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
