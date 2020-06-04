import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  if (!isAuthenticated) {
    return <Fragment></Fragment>;
  }

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/dashboard">
          <i className="fas fa-running"></i> LetsTalkAboutFit
        </Link>
      </h1>
      <Fragment>
        {' '}
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/exercises">Excercises</Link>
          </li>
          <li>
            <a onClick={logout} href="#!">
              <i className="fas fa-door-open"></i>
              <span className="hide-sm"> Logout</span>
            </a>
          </li>
        </ul>
      </Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
