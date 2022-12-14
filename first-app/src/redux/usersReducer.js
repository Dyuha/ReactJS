import { usersAPI } from '../API/API';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

const initialState = {
  users: [],
  pageSize: 5, 
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {...state, users: action.users};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount} ;
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING:
      return {...state, 
              isFollowing: action.isFollowing 
              ?[...state.isFollowing, action.userID] 
              :state.isFollowing.filter(id => id !== action.userID)};    
    default:
      return state;
  }
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setIsFollowing = (isFollowing, userID) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing, userID });

export const getUsersThunkCreator = (currentPage, pageSize) =>{
  return (dispatch) => {
    dispatch(setIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
          dispatch(setIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount));
        })
        .catch(error => {
          console.log(error)
        });
  }
};   

export const setCurrentPageThunkCreator = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(setIsFetching(true));
    usersAPI.getUsers(page, pageSize)
      .then((data) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
      })
      .catch(error => {
      console.log(error)
      });
  }
};

export default usersReducer;
