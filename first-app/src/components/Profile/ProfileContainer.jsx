import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
 
class ProfileContainer extends React.Component {

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    
    return (
      <>
        <Profile profile={this.props.profile}/>
      </>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
};

const mapDispatchToProps = {
  setUserProfile,
}

export default connect (mapStateToProps, mapDispatchToProps)(ProfileContainer);