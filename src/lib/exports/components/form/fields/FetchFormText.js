import React from 'react';
import TextField from '../elements/TextField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormText = ({ field, html }) => {
  return (
    <>
      <FetchLabel label={field.label} name={field.name} />
      <TextField html={html} preload={field.value} />
    </>
  );
};

export default FetchFormText;
