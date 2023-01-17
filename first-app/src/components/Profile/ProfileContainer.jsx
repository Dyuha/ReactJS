import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import withParams from "../../hoc/withParams";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.params.userID);
    this.props.getStatus(this.props.params.userID);
  }

  render() {
    // eslint-disable-next-line eqeqeq
    return <Profile isOwner={this.props.params.userID == this.props.userID} 
                    profile={this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus} 
                    savePhoto={this.props.savePhoto} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userID: state.auth.userID,
  };
};

const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withParams,
  withAuthRedirect
)(ProfileContainer);
