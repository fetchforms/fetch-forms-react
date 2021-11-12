import React from 'react';

const TextField = ({ html, initialValue, options }) => {
  return (
    <select
      {...html}
      defaultValue={initialValue}
      value={initialValue}
      className={`fetch-input`}
    >
      <option key='initial_default' value=''></option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default TextField;
