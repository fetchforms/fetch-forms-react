import React from 'react';

const TextField = ({ html, preload }) => {
  return <input {...html} value={preload} className='fetch-input' />;
};

export default TextField;
