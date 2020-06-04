import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../layout/Loader';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileEducation from './ProfileEducation';
import { getProfileById } from '../../actions/profile';
import UpdateProfile from './UpdateProfile';

const OtherProfile = ({
  getProfileById,
  profile: { profile },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Loader />
      ) : (
        <div className="profile-grid my-1">
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className="profile-exp bg-white p-2">
            <div className="prof-about">
              <h2 className="text-primary">About</h2>
              <h4>Years Working Out: {profile.durationworkingout}</h4>
              <h4>Professional Trainer? {profile.professionaltrainer}</h4>
              <h4>Goals: {profile.goals}</h4>
              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                  <Link to="/edit-profile" className="prof-btn btn-light">
                    <i className="fas fa-user-circle text-primary"></i> Edit
                    Profile
                  </Link>
                )}
            </div>
          </div>
          <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            {profile.education.length > 0 ? (
              <Fragment>
                {profile.education.map((education) => (
                  <ProfileEducation key={education._id} education={education} />
                ))}
                {auth.isAuthenticated &&
                  auth.loading === false &&
                  auth.user._id === profile.user._id && (
                    <Link to="/add-education" className="prof-btn btn-light">
                      <i className="fas fa-user-circle text-primary"></i> Update
                      Education
                    </Link>
                  )}
              </Fragment>
            ) : (
              <h4>No education credentials</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

OtherProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(OtherProfile);
