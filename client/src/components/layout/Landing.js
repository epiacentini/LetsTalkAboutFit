import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  const [classtext, setclassText] = useState('cont');

  const mouseLeftHandler = () => {
    setclassText('cont hover-left');
  };

  const mouseLeftLeaveHandler = () => {
    setclassText('cont');
  };

  const mouseRightHandler = () => {
    setclassText('cont hover-right');
  };

  const mouseRightLeaveHandler = () => {
    setclassText('cont');
  };

  return (
    <div className="wrapper">
      <div className={classtext}>
        <div
          className="split left"
          onMouseEnter={mouseLeftHandler}
          onMouseLeave={mouseLeftLeaveHandler}
        >
          <h1 className="ld-txt">New to FitTogether?</h1>
          <Link to="/register" className="ld-btn btn-left">
            Sign Up!
          </Link>
        </div>
        <div
          className="split right"
          onMouseEnter={mouseRightHandler}
          onMouseLeave={mouseRightLeaveHandler}
        >
          <h1 className="ld-txt">Already Part of the Family?</h1>
          <Link to="/login" className="ld-btn btn-right">
            Sign In!
          </Link>
        </div>
      </div>
    </div>
  );
};
