import { usersAPI } from '../API/API';
const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "users/TOGGLE_IS_FOLLOWING";

const initialState = {
  users: [],
  pageSize: 25, 
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return followUnfollowReducer(state, action, true);
    case UNFOLLOW:
      return followUnfollowReducer(state, action, false)
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

const followUnfollowReducer = (state, action, followed) => {
  return {
    ...state,
    users: state.users.map((u) => {
      if (u.id === action.userID) {
        return { ...u, followed: followed };
      }
      return u;
    }),
  }
};

export const acceptFollow = (userID) => ({ type: FOLLOW, userID });
export const acceptUnfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setIsFollowing = (isFollowing, userID) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing, userID });

export const getUsers = (currentPage, pageSize) => async dispatch => {
  dispatch(setIsFetching(true));
  try {
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  } catch(error) {
    console.log(error)
  }
};
 
export const setNewCurrentPage = (page, pageSize) => async dispatch => {
  dispatch(setCurrentPage(page));
  dispatch(setIsFetching(true));
  try {
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
  } catch(error) {
    console.log(error)
  }
};

const followUnfollow = async (dispatch, userID, apiMethod, action) => {
  dispatch(setIsFollowing(true, userID));
  try {
    const data = await apiMethod(userID)
    if (data.resultCode === 0){
      dispatch(action(userID)); 
    }
    dispatch(setIsFollowing(false, userID));
  } catch(error) {
    console.log(error)
  }
};

export const unfollow = (userID) => async dispatch => {
  const apiMethod = usersAPI.unfollowUser;
  followUnfollow(dispatch, userID, apiMethod, acceptUnfollow);
  
};

export const follow = (userID) => async dispatch => {
  const apiMethod = usersAPI.followUser;
  followUnfollow(dispatch, userID, apiMethod, acceptFollow);
};

export default usersReducer;

