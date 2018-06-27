import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import Clock from './MouseMover';

const ErrorWrapper = () => (
  <ErrorBoundary>
    <Clock />
  </ErrorBoundary>
);


export default ErrorWrapper;
