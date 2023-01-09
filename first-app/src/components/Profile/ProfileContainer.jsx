import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import withParams from "../../hoc/withParams";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.params.userID);
    this.props.getStatus(this.props.params.userID);
  }
  render() {
    return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withParams,
  withAuthRedirect
)(ProfileContainer);
