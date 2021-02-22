import React from 'react';
import './Error.css';

const Error = ({ text }) => {
  if (!text) {
    return null;
  }

  return <div className="Error-content">{text}</div>;
}

export default Error;
