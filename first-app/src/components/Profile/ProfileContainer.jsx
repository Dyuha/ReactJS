import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";


class ProfileContainer extends React.Component {

  render (){
    return <Profile />
  }
};

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};


export default connect(mapStateToProps, {})(ProfileContainer);
