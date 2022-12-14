import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { usersAPI } from '../../API/API';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.params.userID;
    usersAPI.getUserProfile(userID)
      .then((data) => {
        this.props.setUserProfile(data);
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


