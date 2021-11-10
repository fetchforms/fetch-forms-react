import React from 'react';

const RadioField = ({ html }) => {
  // console.log(html);
  return (
    <input
      {...html}
      value={html.value}
      className={`form-radio border-gray-400 focus:border-blue-500 h-4 w-4 mt-1 text-blue-500`}
    />
  );
};

export default RadioField;
