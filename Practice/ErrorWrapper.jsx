import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import DisplayComponent from './Clock';

const ErrorWrapper = () => (
  <ErrorBoundary>
    <DisplayComponent />
  </ErrorBoundary>
);


export default ErrorWrapper;
