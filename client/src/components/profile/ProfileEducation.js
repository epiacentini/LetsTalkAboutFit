import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, current, to, from },
}) => {
  return (
    <div className="prof-ed">
      <h2 className="text-dark">{school}</h2>
      <p>
        <Moment format="MM/DD/YYYY">{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format="MM/DD/YYYY">{to}</Moment>}
      </p>
      <p>
        <strong>Degree:</strong>
        {degree}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
