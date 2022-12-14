import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.params.userID);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = {
  getUserProfile
};

const TakeParams = (props) => (<ProfileContainer {...props} params={useParams()} />);
export default connect(mapStateToProps, mapDispatchToProps)(TakeParams);
