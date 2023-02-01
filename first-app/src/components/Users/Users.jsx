import React, { useEffect, useMemo } from "react";
import Paginator from "../../common/Paginator/Pagintor";
import { getUsers, setNewCurrentPage, unfollow, follow } from "../../redux/usersReducer";
import User from "./User";
import { useDispatch, useSelector } from 'react-redux';
import {
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getIsFollowing,
  getUsersSelector,
} from "../../redux/usersSelectors";
import Preloader from '../../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Skeleton } from "antd";
import cls from './Users.module.css'


const SkeletonFetching = () => {
  return (
    <div className={cls.skeleton}>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
      <Skeleton active avatar paragraph={{ rows: 3 }} size={'small'} round={true} title={false}/>
    </div>
  )
};


const Users = (props) => {

  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const users = useSelector(getUsersSelector)
  const isFollowing = useSelector(getIsFollowing)
  const isFetching = useSelector(getIsFetching)

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize)); // eslint-disable-next-line
  }, [])  

  const onPageChange = (page) => {
    dispatch(setNewCurrentPage(page, pageSize));
  };

  const _follow = (userID) => {
    dispatch(follow(userID));
  };

  const _unfollow = (userID) => {
    dispatch(unfollow(userID));
  };

  const usersArray = useMemo( () => users.map( user => (
    <User key={user.id}
          user={user} 
          follow={_follow} 
          unfollow={_unfollow} 
          isFollowing={isFollowing} /> // eslint-disable-next-line 
  )), [users])

  return (
    <div style={{marginTop:'10px'}}>
      {isFetching 
        ? <SkeletonFetching /> 
        : ''}
      <Paginator totalItemsCount={totalUsersCount}
                 pageSize={pageSize}
                 onPageChange={onPageChange}
                 currentPage={currentPage}/>
      {usersArray}
    </div>
  );
};

export default withAuthRedirect(Users);
