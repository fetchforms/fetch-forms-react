import React from 'react';
import FetchLabel from '../elements/FetchLabel';

const FetchFormTextarea = ({ label, html }) => {
  return (
    <>
      <FetchLabel label={label} name={html.name} />
      <textarea {...html} className='fetch-input'></textarea>
    </>
  );
};

export default FetchFormTextarea;
