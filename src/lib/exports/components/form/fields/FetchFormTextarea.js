import React from 'react';
import TextareaField from '../elements/TextareaField';
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
