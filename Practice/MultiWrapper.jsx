import React, { Fragment } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Clock from './MouseMover';

const MultiWrapper = () => (
  <Fragment>
    <ErrorBoundary>
      These two are in the same error boundary
      <Clock />
      <Clock />
    </ErrorBoundary>
    <ErrorBoundary>
      These two are seperate
      <Clock />
    </ErrorBoundary>
    <ErrorBoundary>
      <Clock />
    </ErrorBoundary>
  </Fragment>
);


export default MultiWrapper;
