import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    interests,
    user: { name },
  },
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">{name.trim().split(' ')[0]}s Bio</h2>
        <br></br>
        <p>{bio}</p>
        <div className="line"></div>
      </Fragment>
    )}
    <h2 className="text-primary">{name.trim().split(' ')[0]}s Interests:</h2>
    <div>
      {interests.map((interest, index) => (
        <div key={index} className="p-1">
          <i className="fas fa-comment" /> {interest}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
