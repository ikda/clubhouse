import React from 'react';
import { Link } from 'react-router-dom';
import MyProfileSettingForm from '../forms/MyProfileSettingForm'


class Profile extends React.Component {


  render () {
    return (
      <div>
        <h1>Profile</h1>
        <Link to = "/MyProfileSetting">MyProfileSetting</Link>
        <h4>NAME</h4>
        <h4>LOCATION</h4>
        <h4>POSITION</h4>
        <h4>MY CLUBHOUSE</h4>


        <h3>My Rank</h3>
        <h4>Soccer Rank</h4>
        <h5>World</h5>
        <h5>Korea</h5>
        <h5>Seoul</h5>
        <h5>Game : 500</h5>
        <h5>Goal : 750</h5>
        <h5>Assist : 370</h5>
      </div>
    );
  }
}




export default Profile;
