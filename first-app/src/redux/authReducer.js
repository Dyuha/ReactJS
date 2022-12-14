import { usersAPI } from '../API/API';
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
        isAuth: true,
      }
    default:
      return state;  
  }
};

export const setAuthUserData = (userID, email, login) => ({type: SET_USER_DATA, data:{ userID, email, login }});

export const getAuth = () => {
  return (dispatch) => {
    usersAPI.getAuth()
      .then((data) => {
        const {login, id, email} = data.data;
        data.resultCode 
          ? alert(data.messages[0])
          : dispatch(setAuthUserData( id, email, login ))
      })
      .catch(error => {
        console.log(error)
      });
  }
};

export default authReducer;
