import React from "react";
import cls from "./ProfileInfo.module.css";


const ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMKr2niqS_dZSo3NV8hpAiAwbIYHv-ifZMsoIq-NTQdmkQiKJrCajLFB7cw_mcVojSr0&usqp=CAU";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    //setState - асинхронный
    this.setState({
        editMode: true,
    });
  }

  deactivateEditMode = () => {
    //setState - асинхронный
    this.setState({
        editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (evn) => {
    this.setState({
      status: evn.currentTarget.value
    });
  }

  componentDidUpdate() {
    console.log('update')
  }

  render () {
    return (
      <div className={cls.description}>
        <div>
          {
            <img
              src={this.props.profile.photos.large ? this.props.profile.photos.large : ava}
              alt="avatarka"
              className={cls.userAvatar}
            />
          }
        </div>
        <div className={cls.mainInfo}>
          <div>{`Name: ${this.props.profile.fullName}`}</div>
          <div>
            {this.state.editMode 
              ? <div>Status: <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status}/></div> 
              : <span onClick={ this.activateEditMode } >{`Status: ${this.props.status} `}</span>
            }            
          </div>
          <div>{`Looking for a job: ${this.props.profile.lookingForAJobDescription}`}</div>
        </div>
      </div>
    );
  }
};

export default ProfileStatus;