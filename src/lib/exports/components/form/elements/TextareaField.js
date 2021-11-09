import React from 'react';

const TextareaField = ({ html, preload }) => {
  return (
    <textarea
      {...html}
      value={preload}
      className='form-input border border-gray-400 rounded-lg block w-full placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
    ></textarea>
  );
};

export default TextareaField;
