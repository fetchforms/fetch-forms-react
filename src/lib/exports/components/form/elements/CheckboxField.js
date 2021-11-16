import React from 'react';

const CheckboxField = ({ html, checked }) => {
  return (
    <input {...html} defaultChecked={checked} className={`fetch-checkbox`} />
  );
};

export default CheckboxField;
