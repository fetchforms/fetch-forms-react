import React from 'react';

const TextareaField = ({ html, preload }) => {
  return (
    <textarea {...html} value={preload} className='fetch-input'></textarea>
  );
};

export default TextareaField;
