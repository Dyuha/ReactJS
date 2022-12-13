import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.params.userID;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userID}`
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
        <Profile profile={this.props.profile}/>
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

const TakeParams = (props) => ( <ProfileContainer {...props} params={useParams()}/> ) 
export default connect(mapStateToProps, mapDispatchToProps)(TakeParams);


