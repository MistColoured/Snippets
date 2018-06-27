import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    this.setState({
      hasError: true,
      errorInfo,
    });
    // You can also log the error to an error reporting service
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    // TODO: Use propTypes on children
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>
            Something went wrong.
          </h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary;
