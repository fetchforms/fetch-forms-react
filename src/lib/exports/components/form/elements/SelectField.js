import React from 'react';

const TextField = ({ html, preload, options }) => {
  return (
    <select
      {...html}
      value={preload}
      className={`form-input border border-gray-400 rounded-lg block w-full focus:ring-purple-500 focus:border-purple-500`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default TextField;
