import React from 'react';

const CheckboxField = ({ html, checked }) => {
  // console.log(html);
  return (
    <input
      {...html}
      defaultChecked={checked}
      value=''
      className={`form-checkbox rounded border-gray-400 focus:border-blue-500 h-4 w-4 mt-1 text-blue-500`}
    />
  );
};

export default CheckboxField;
