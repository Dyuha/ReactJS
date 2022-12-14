import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from '../../redux/authReducer';
import { usersAPI } from "../../API/API";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth()
      .then((data) => {
        const {login, id, email} = data.data; 
        data.resultCode 
          ? alert(data.messages[0])
          : this.props.setAuthUserData( id, email, login )
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return <Header {...this.props} />;
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
};

const mapDispatchToProps = {
  setAuthUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
