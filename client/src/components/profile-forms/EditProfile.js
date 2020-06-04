import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { Link, withRouter, Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  history,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState({
    durationworkingout: '',
    bio: '',
    age: '',
    gender: '',
    hometown: '',
    professionaltrainer: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    interests: '',
    goals: '',
  });

  const [startDate, setStartDate] = useState(new Date());

  const {
    durationworkingout,
    bio,
    age,
    gender,
    hometown,
    professionaltrainer,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
    interests,
    goals,
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      durationworkingout:
        loading || !profile.durationworkingout
          ? ''
          : profile.durationworkingout,
      age: loading || !profile.age ? '' : profile.age,
      gender: loading || !profile.gender ? '' : profile.gender,
      goals: loading || !profile.goals ? '' : profile.goals,
      interests:
        loading || !profile.interests ? '' : profile.interests.join(','),
      hometown: loading || !profile.hometown ? '' : profile.hometown,
      professionaltrainer:
        loading || !profile.professionaltrainer
          ? ''
          : profile.professionaltrainer,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
    });
  }, [loading, getCurrentProfile]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <div className="createprof">
      {' '}
      <h1 className="large text-primary">Update Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Lets get your info up to speed!
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <select
            name="durationworkingout"
            value={durationworkingout}
            onChange={(e) => onChange(e)}
          >
            <option value="0">* Select Years Working Out</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2-5">2-5</option>
            <option value="5+">5+</option>
            <option value="10+">10+</option>
          </select>
        </div>
        <div className="form-group">
          <DatePicker
            className="dp"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setFormData({ ...formData, age: date });
            }}
            showYearDropdown
            dateFormatCalendar="MMMM"
            yearDropdownItemNumber={70}
            scrollableYearDropdown
            value={age}
            name="age"
            placeholderText="What is your DOB"
          />
        </div>
        <div className="form-group">
          <select name="gender" value={gender} onChange={(e) => onChange(e)}>
            <option value="0">Select Gender (Optional)</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="2-5">Non-Binary</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Where do you call home?"
            name="hometown"
            value={hometown}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <select
            name="professionaltrainer"
            value={professionaltrainer}
            onChange={(e) => onChange(e)}
          >
            <option value="0">
              * Have you ever worked as a professional trainer?
            </option>
            <option value="YES">YES</option>
            <option value="I have been a trainer but not professionally">
              I have been a trainer but not professionally
            </option>
            <option value="NO">NO</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            className="bio-ta"
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group">
          <textarea
            className="bio-ta"
            placeholder="What are your current fitness goals"
            name="goals"
            value={goals}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your interests seperated by commas"
            name="interests"
            value={interests}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
