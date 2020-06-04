import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteAccount } from '../../actions/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UpdateProfile = ({ deleteAccount }) => {
  let history = useHistory();
  const del = () => {
    deleteAccount();
    history.push('/dashboard');
    localStorage.removeItem('token');
    window.location.reload(true);
    window.location.reload(false);
  };

  return (
    <div className="dash-buttons">
      <div className="my-2">
        <button onClick={() => del()} className="btn btn-danger">
          <i className="fas fa-user-minus"> Delete My Account</i>
        </button>
      </div>
    </div>
  );
};

UpdateProfile.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
};

export default connect(null, { deleteAccount })(UpdateProfile);
