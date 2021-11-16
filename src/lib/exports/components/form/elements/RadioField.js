import React from 'react';

const RadioField = ({ html, isChecked, updateChecked }) => {
  const toggle = (e) => {
    updateChecked(e.target.value);
  };

  return (
    <input
      {...html}
      value={html.value}
      className={`fetch-radio ${isChecked ? 'checked' : ''}`}
      onClick={toggle}
    />
  );
};

export default RadioField;
