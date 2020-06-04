import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ExerciseItem = ({ name, description }) => {
  return (
    <Fragment>
      <div className="ex-item">
        <h2>{name}</h2>
        <br></br>
        <p>{description}</p>
      </div>
    </Fragment>
  );
};

export default ExerciseItem;
