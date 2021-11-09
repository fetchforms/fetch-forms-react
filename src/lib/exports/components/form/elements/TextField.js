import React from 'react';

const TextField = ({ html, preload }) => {
  return (
    <input
      {...html}
      value={preload}
      className='form-input border border-gray-400 rounded-lg block w-full placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500'
    />
  );
};

export default TextField;
