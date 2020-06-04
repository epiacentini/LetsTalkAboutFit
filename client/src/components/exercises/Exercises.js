import React, { useState, useEffect, Fragment } from 'react';
import ExerciseItem from './ExerciseItem';
import Loader from '../layout/Loader';

const Exercises = (props) => {
  const [exercise, setExercise] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currPage, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const status = 2;
  const limit = 200;
  const language = 2;

  const parse = (str) => {
    if (str[1] != 'p') return '';
    var result = str.match(/<p>(.*?)<\/p>/g).map(function (val) {
      return val.replace(/<\/?p>/g, '');
    });
    return result;
  };

  const getExercises = async () => {
    const res = await fetch(
      `https://wger.de/api/v2/exercise/?language=${language}&status=${status}&limit=${limit}`
    );
    const data = await res.json();
    data.results.forEach((element) => {
      setExercise((exercise) => [...exercise, element]);
    });
    setLoading(false);
  };

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <div className="ex-wrap">
      <h1 className="exl">Exercises List</h1>
      <h2 className="exh2">
        {' '}
        {'  '}
        If you are ever feeling confused here is a list of exercises for
        reference!
      </h2>
      {!isLoading ? (
        exercise.map((exercise) => (
          <ExerciseItem
            name={exercise.name}
            key={exercise.id}
            description={parse(exercise.description)}
          />
        ))
      ) : (
        <Fragment>
          <h1>Loading the exercises may take a few moments</h1>
          <Loader />
        </Fragment>
      )}
    </div>
  );
};

export default Exercises;
