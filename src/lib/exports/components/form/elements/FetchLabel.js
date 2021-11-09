import React from 'react';

const FetchField = ({ label, name, noMargin }) => {
  return (
    <label
      htmlFor={name}
      className={`text-gray-800 tracking-wide block ${
        noMargin ? 'mb-0' : 'mb-1'
      }`}
    >
      {label}
    </label>
  );
};

export default FetchField;
