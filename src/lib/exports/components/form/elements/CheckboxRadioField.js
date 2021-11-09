import React from 'react';

const CheckboxRadioField = ({ html, checked }) => {
  return (
    <input
      {...html}
      checked={checked}
      className={`${
        html.type === 'checkbox' ? 'form-checkbox rounded' : 'form-radio'
      }  border-gray-400 focus:ring-purple-500 focus:border-purple-500 h-4 w-4 mt-1 text-purple-500`}
    />
  );
};

export default CheckboxRadioField;
