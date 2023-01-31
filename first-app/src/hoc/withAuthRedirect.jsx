import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"}/>
    }
    return <Component {...props}/>
  }


  const AuthRedirectComponent = connect(mapStateToProps)(RedirectComponent) 

  return AuthRedirectComponent;
}