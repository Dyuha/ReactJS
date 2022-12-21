import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import withParams from "../../hoc/withParams";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.params.userID);
  }
  render() {
    return <Profile profile={this.props.profile} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = {
  getUserProfile,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withParams,
  withAuthRedirect
)(ProfileContainer);
