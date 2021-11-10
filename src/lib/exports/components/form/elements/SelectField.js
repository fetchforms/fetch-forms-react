import React from 'react';

const TextField = ({ html, initialValue, options }) => {
  return (
    <select
      {...html}
      defaultValue={initialValue}
      value={initialValue}
      className={`form-input border border-gray-400 rounded-lg block w-full focus:ring-blue-500 focus:border-blue-500`}
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
