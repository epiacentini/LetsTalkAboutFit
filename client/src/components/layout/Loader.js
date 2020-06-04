import React, { Fragment } from 'react';
import Loader from './loader.gif';

export default () => (
  <Fragment>
    <img
      src={Loader}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading"
    />
  </Fragment>
);
