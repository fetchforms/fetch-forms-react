import React from 'react';

const RadioField = ({ html }) => {
  // console.log(html);
  return <input {...html} value={html.value} className='fetch-radio' />;
};

export default RadioField;
