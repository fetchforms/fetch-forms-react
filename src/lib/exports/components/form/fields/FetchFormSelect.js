import React from 'react';
import FetchLabel from '../elements/FetchLabel';

const FetchFormSelect = ({ label, options, html }) => {
  return (
    <>
      <FetchLabel label={label} name={html.name} />
      <select {...html} className={`fetch-input`}>
        <option key='initial_default' value=''></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default FetchFormSelect;
