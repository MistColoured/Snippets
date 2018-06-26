import React, { Component, Fragment } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Clock from './Clock';

class ErrorWrapper extends Component {
  render() {
    return (
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
      </Fragment >
    );
  }
}

export default ErrorWrapper;