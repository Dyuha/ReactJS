import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";


const initialState = {
  initialized: false,
}

const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;  
  }
};

export const InitializedSuccess = (userID, email, login, isAuth) => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
  return (dispatch) => {
    dispatch(getAuth())
    .then(() => dispatch(InitializedSuccess()));
  }
};

export default appReducer;
