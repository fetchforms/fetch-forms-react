import React from 'react';

const FetchField = ({ label, name, noMargin }) => {
  return (
    <label
      htmlFor={name}
      className={`fetch-label ${noMargin ? 'no-margin' : ''}`}
    >
      {label}
    </label>
  );
};

export default FetchField;
