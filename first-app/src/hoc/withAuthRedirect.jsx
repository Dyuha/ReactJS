import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      debugger
      if (!this.props.isAuth) {
        return <Navigate to={"/login"}/>
      }
      debugger
      return <Component {...this.props}/>
    }
  }

  const AuthRedirectComponent = connect(mapStateToProps)(RedirectComponent) 

  return AuthRedirectComponent;
}