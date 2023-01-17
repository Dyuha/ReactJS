import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../API/API';
const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";


const initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }
    default:
      return state;  
  }
};

export const setAuthUserData = (userID, email, login, isAuth, captchaUrl) => ({type: SET_USER_DATA, data:{ userID, email, login, isAuth, captchaUrl}});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})

export const getAuth = () => async dispatch => {
  try {
    const data = await authAPI.getAuth()
    const {login, id, email} = data.data;
    data.resultCode 
      ? alert(data.messages[0])
      : dispatch(setAuthUserData( id, email, login, true, null))     
  } catch(error) {
    console.log(error)
  } 
};

export const login = (email, password, rememberMe, captcha) => async dispatch => {
  try {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    data.resultCode
      ? dispatch(stopSubmit("login", {_error: `${data.messages}`}))
      : dispatch(getAuth())
    if (data.resultCode === 10){
      dispatch(getCaptchaUrl());
    } 
  } catch(error) {
    console.log(error)
  }
};


export const logout = () => async dispatch => {
  try {
    const data = await authAPI.logout()
    if ( data.resultCode === 0 ){
      dispatch(setAuthUserData( null, null, null, false ))
    }
  } catch(error) {
    console.log(error)
  }
};

export const getCaptchaUrl = () => async dispatch => {
  try {
    const data = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlSuccess(data.url));
  } catch(error) {
    console.log(error)
  }
};

export default authReducer;
