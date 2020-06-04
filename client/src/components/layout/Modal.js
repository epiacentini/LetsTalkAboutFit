import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ exercise }) => {
  const [ex, setExercise] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');

  function parse(str) {
    if (str.charAt(1) != 'p') return '';
    var result = str.match(/<p>(.*?)<\/p>/g).map(function (val) {
      return val.replace(/<\/?p>/g, '');
    });
    return result;
  }

  const getEx = async () => {
    console.log(exercise);
    const res = await fetch(
      `https://wger.de/api/v2/exercise?status=2&language=2&name=${exercise.tag}`
    );
    const currExercise = await res.json();
    setExercise(currExercise.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    getEx();
  }, []);

  return (
    <Fragment>
      {!isLoading && ex !== undefined ? (
        <div className="modal">
          <h2>{ex.name}</h2>
          <div className="content">{parse(ex.description)}</div>
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

Modal.propTypes = {};

export default Modal;
