import { stopSubmit } from 'redux-form';
import { authAPI } from '../API/API';
const SET_USER_DATA = "SET_USER_DATA";


const initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;  
  }
};

export const setAuthUserData = (userID, email, login, isAuth) => ({type: SET_USER_DATA, data:{ userID, email, login, isAuth }});

export const getAuth = () => {
  return (dispatch) => {
    return authAPI.getAuth()
      .then((data) => {
        const {login, id, email} = data.data;
        data.resultCode 
          ? alert(data.messages[0])
          : dispatch(setAuthUserData( id, email, login, true ))
      })
      .catch(error => {
        console.log(error)
      });
  }
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then((data) => {
        data.resultCode
        ? dispatch(stopSubmit("login", {_error: `${data.messages}`}))
        : dispatch(getAuth())
      })
      .catch(error => {
        console.log(error)
      });
  }
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then((data) => {
        if ( data.resultCode === 0 ){
          dispatch(setAuthUserData( null, null, null, false ))
        }
      })
      .catch(error => {
        console.log(error)
      });
  }
};

export default authReducer;
