import React from 'react';
import TextareaField from '../elements/TextareaField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormTextarea = ({ field, html }) => {
  return (
    <>
      <FetchLabel label={field.label} name={field.name} />
      <TextareaField html={html} preload={field.value} />
    </>
  );
};

export default FetchFormTextarea;
