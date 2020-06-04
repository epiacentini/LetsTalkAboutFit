import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { Link } from 'react-router-dom';
import Loader from '../layout/Loader';
import Posts from './Posts';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount,
  history,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Loader />
  ) : (
    <Fragment>
      {profile !== null ? (
        <Fragment>
          <div className="ps-wrap">
            <Posts />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/create-profile">
            <p className="noprof">
              UH OH! <br></br>
              You haven't set up a profile yet. <br></br>
              Click any of the text to set up your profile!
            </p>
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
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
  Dashboard
);
