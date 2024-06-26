// ErrorDisplay.jsx
import React from 'react';

const ErrorDisplay = ({ error }) => {
  if (!error) return null;
  return <div className="error">{error.message}</div>;
};

export default ErrorDisplay;
