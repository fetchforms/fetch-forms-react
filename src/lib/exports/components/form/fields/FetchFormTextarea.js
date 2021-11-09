import React from 'react';
import TextareaField from '../elements/TextareaField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormTextarea = ({ field }) => {
  return (
    <>
      <FetchLabel label={field.label} name={field.html.name} />
      <TextareaField html={field.html} preload={field.value} />
    </>
  );
};

export default FetchFormTextarea;
