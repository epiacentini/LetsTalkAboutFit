import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { Link, Redirect } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import Loader from '../layout/Loader';
import ProfileAbout from './ProfileAbout';
import ProfileTop from './ProfileTop';
import ProfileEducation from './ProfileEducation';
import Moment from 'react-moment';
import { check } from 'express-validator';

const Profile = ({
  getCurrentProfile,
  auth: { user, isAuthenticated },
  profile: { profile, loading },
  deleteAccount,
  history,
}) => {
  const checkStatus = () => {
    if (localStorage.getItem('token') === null) {
      return <Redirect to="/login" />;
    }
  };

  useEffect(() => {
    checkStatus();
    getCurrentProfile();
  }, [getCurrentProfile, checkStatus]);

  return loading ? (
    <Loader />
  ) : (
    <div className="profile-grid my-1">
      <ProfileTop profile={profile} />
      <ProfileAbout profile={profile} />
      <div className="profile-exp bg-white p-2">
        <div className="prof-about">
          <h2 className="text-primary">About</h2>
          {profile.gender && <h4>Gender: {profile.gender}</h4>}
          {profile.age && (
            <h4>
              DOB: <Moment format="MM/DD/YYYY">{profile.age}</Moment>
            </h4>
          )}
          {profile.durationworkingout && (
            <h4>Years Working Out: {profile.durationworkingout}</h4>
          )}
          {profile.professionaltrainer && (
            <h4>Professional Trainer? {profile.professionaltrainer}</h4>
          )}
          {profile.goals && <h4>Goals: {profile.goals}</h4>}
          <Link to="/edit-profile" className="prof-btn btn-light">
            <i className="fas fa-user-circle text-primary"></i> Edit Profile
          </Link>
        </div>
      </div>
      <div className="profile-edu bg-white p-2">
        <h2 className="text-primary">Education</h2>
        {profile.education.length > 0 ? (
          <Fragment>
            {profile.education.map((education) => (
              <ProfileEducation key={education._id} education={education} />
            ))}
            <Link to="/add-education" className="prof-btn btn-light">
              <i className="fas fa-user-circle text-primary"></i> Update
              Education
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <h4>No education credentials</h4>
            <Link to="/add-education" className="prof-btn btn-light">
              <i className="fas fa-user-circle text-primary"></i> Update
              Education
            </Link>
          </Fragment>
        )}
      </div>
      <UpdateProfile />
    </div>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Profile
);
